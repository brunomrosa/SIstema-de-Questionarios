/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import Sequelize, { Model } from 'sequelize';

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        content: Sequelize.STRING,
        author_id: Sequelize.INTEGER,
        question_id: Sequelize.INTEGER,
        lat: Sequelize.FLOAT,
        long: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Question, {
      foreignKey: 'question_id',
      as: 'question',
    }),
      this.belongsTo(models.User, {
        foreignKey: 'author_id',
        as: 'author',
      });
  }
}

export default Answer;
