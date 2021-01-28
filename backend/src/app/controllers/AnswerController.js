import * as Yup from 'yup';
import Answer from '../models/Answer';

class AnswerController {
  async index(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { question } = req.query;

    const answer = await Answer.findOne({
      attributes: [
        'content',
        'lat',
        'long',
        'question_id',
        'createdAt',
        'updatedAt',
      ],
      where: {
        question_id: question,
        author_id: req.userId,
      },
      include: [
        { association: 'author', attributes: ['id', 'email', 'name'] },
        'question',
      ],
    });

    if (!answer) {
      return res.status(409).json({ error: 'Answer not found' });
    }

    return res.json(answer);
  }

  async show(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const answer = await Answer.findOne({
      where: {
        id,
      },
      include: [{ association: 'author', attributes: ['id', 'email', 'name'] }],
    });

    delete answer.dataValues.author_id;
    delete answer.dataValues.question_id;
    if (!answer) {
      return res.status(409).json({ error: 'Answer not found' });
    }

    return res.json(answer);
  }

  async store(req, res) {
    const bodySchema = Yup.object().shape({
      content: Yup.string().required(),
      lat: Yup.number().required(),
      long: Yup.number().required(),
    });

    if (!(await bodySchema.isValid(req.body))) {
      return res.status(400).json({ error: 'Body Validation fails' });
    }

    const querySchema = Yup.object().shape({
      question: Yup.number().required(),
    });

    if (!(await querySchema.isValid(req.query))) {
      return res.status(400).json({ error: 'Query Validation fails' });
    }

    const { content, lat, long } = req.body;
    const { question } = req.query;
    const author_id = req.userId;

    const alreadyAnswered = await Answer.findOne({
      where: {
        question_id: question,
      },
    });

    if (alreadyAnswered) {
      return res
        .status(409)
        .json({ error: 'You already answered this questions' });
    }

    const answer = await Answer.create({
      content,
      author_id,
      lat,
      long,
      question_id: question,
    });

    return res.json(answer);
  }
}

export default new AnswerController();
