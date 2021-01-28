import * as Yup from 'yup';
import Question from '../models/Question';

class QuestionController {
  async index(req, res) {
    const schema = Yup.object().shape({
      survey: Yup.string().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { survey } = req.query;

    const question = await Question.findAll({
      attributes: ['id', 'title', 'createdAt', 'updatedAt'],
      where: {
        survey_id: survey,
      },
    });

    if (!question) {
      return res.status(409).json({ error: 'None questions where found' });
    }

    return res.json(question);
  }

  async show(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const question = await Question.findOne({
      where: {
        id,
      },
    });

    if (!question) {
      return res.status(409).json({ error: 'Question not found' });
    }

    delete question.dataValues.survey;

    return res.json(question);
  }

  async store(req, res) {
    const bodySchema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await bodySchema.isValid(req.body))) {
      return res.status(400).json({ error: 'Body Validation fails' });
    }

    const querySchema = Yup.object().shape({
      survey: Yup.number().required(),
    });

    if (!(await querySchema.isValid(req.query))) {
      return res.status(400).json({ error: 'Query Validation fails' });
    }

    const { title } = req.body;
    const { survey } = req.query;

    const alreadyExists = await Question.findOne({
      where: {
        title,
        survey_id: survey,
      },
    });

    if (alreadyExists) {
      return res.status(409).json({
        error: 'Question with same name already exists on this survey',
      });
    }

    const question = await Question.create({
      title,

      survey_id: survey,
    });

    return res.json(question);
  }
}

export default new QuestionController();
