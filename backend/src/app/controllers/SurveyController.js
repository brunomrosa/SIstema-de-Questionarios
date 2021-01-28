import * as Yup from 'yup';
import Survey from '../models/Survey';

class SurveyController {
  async index(req, res) {
    const survey = await Survey.findAll({
      include: [{ association: 'author', attributes: ['id', 'email', 'name'] }],
    });

    if (!survey) {
      return res.status(409).json({ error: 'Surveys not found' });
    }

    return res.json(survey);
  }
  async show(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const survey = await Survey.findOne({
      where: {
        id,
      },
      include: [{ association: 'author', attributes: ['id', 'email', 'name'] }],
    });

    if (!survey) {
      return res.status(409).json({ error: 'Survey not found' });
    }

    return res.json(survey);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title } = req.body;

    const titleExists = await Survey.findOne({
      where: { title: req.body.title },
    });

    if (titleExists) {
      return res.status(409).json({ error: 'Survey already exists' });
    }

    const author_id = req.userId;

    const survey = await Survey.create({ title, author_id });

    return res.json(survey);
  }
}

export default new SurveyController();
