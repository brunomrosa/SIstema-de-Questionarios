/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        survey_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Survey, {
      foreignKey: 'survey_id',
      as: 'survey',
    });
  }
}

export default Question;
