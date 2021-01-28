/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import Sequelize from 'sequelize';

import Company from '../app/models/Company';
import Answer from '../app/models/Answer';
import User from '../app/models/User';
import Survey from '../app/models/Survey';
import Question from '../app/models/Question';
import databaseConfig from '../config/database';

const models = [Company, User, Survey, Question, Answer];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => {
      model.init(this.connection);
      model.associate && model.associate(this.connection.models);
    });
  }
}

export default new Database();
