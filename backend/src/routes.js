import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import SurveyController from './app/controllers/SurveyController';
import AnswerController from './app/controllers/AnswerController';
import QuestionController from './app/controllers/QuestionController';

const routes = new Router();

routes.post('/login', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.post('/surveys', SurveyController.store);
routes.get('/surveys/:id', SurveyController.show);
routes.get('/surveys/', SurveyController.index);

routes.post('/answers', AnswerController.store);
routes.get('/answers/:id', AnswerController.show);
routes.get('/answers/', AnswerController.index);

routes.post('/questions', QuestionController.store);
routes.get('/questions/:id', QuestionController.show);
routes.get('/questions/', QuestionController.index);
export default routes;
