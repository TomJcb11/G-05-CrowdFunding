const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('giverr', 'alex', 'user');


//test connection à la base de données
sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données réussie'))
  .catch(err => console.error('Erreur de connexion à la base de données :', err));