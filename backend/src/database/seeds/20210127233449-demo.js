module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'example@example.com',
      password: '$2a$08$OxMexePC3l9z2fdBNeUvH.OxEz9VlBtgxhMCGviYUE.u34NO0HH1e',
      created_at: new Date(),
      updated_at: new Date()
    }]);

  },

  down: async (queryInterface) => {

  },
};
