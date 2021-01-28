module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('answers', 'lat', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
    await queryInterface.addColumn('answers', 'long', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('answers', 'lat');
    await queryInterface.removeColumn('answers', 'long');
  },
};
