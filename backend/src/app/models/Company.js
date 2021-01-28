import Sequelize, { Model } from 'sequelize';

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        fantasy_name: Sequelize.STRING,
        document: Sequelize.STRING,
        is_juridic: Sequelize.BOOLEAN,
        ie: Sequelize.STRING,
        ie_free: Sequelize.BOOLEAN,
        im: Sequelize.STRING,
        cnae: Sequelize.STRING,
        cod_regime: Sequelize.STRING,
        site: Sequelize.STRING,
        status: Sequelize.STRING,
        slug: Sequelize.STRING,
        contact_name: Sequelize.STRING,
        contact_phone: Sequelize.STRING,
        contact_email: Sequelize.STRING,
        cell_phone: Sequelize.STRING,
        charge_email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Company;
