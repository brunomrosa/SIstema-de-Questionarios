import Sequelize, { Model } from 'sequelize';

class Survey extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        author_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'author_id',
      as: 'author',
    });
  }
}

export default Survey;
