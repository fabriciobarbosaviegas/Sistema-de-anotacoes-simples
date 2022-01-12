const Sequelize = require('sequelize')

// Conexão com o banco de dados
	
	const sequelize = new Sequelize('postapp', 'root', 'senha', {
		host: 'localhost',
		dialect: 'mysql'
	})

// Exportar o modulo

	module.exports = {
		Sequelize: Sequelize,
		sequelize: sequelize
	}
