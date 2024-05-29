const Sequelize = require('sequelize');
const db = require('../dao/db');

// Definir o modelo "indices"
const Indices = db.define('indices', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  indice: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ipa_Final: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pp_Final: {
    type: Sequelize.STRING,
    allowNull: false
  },

});



//Indices.sync({force : true});


//Indices.sync()
//.then(() => console.log('Tabela sincronizada com sucesso.'))
//.catch(err => console.error('Erro ao sincronizar tabela:', err));


module.exports = Indices;
