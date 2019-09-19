const db = require('./db')

// cria as colunas da tabela

const Post = db. sequelize.define('postagens', { 
	titulo: {
		type: db.Sequelize.STRING
		},
	    conteudo:{
	     type: db.Sequelize.TEXT}
	    })

// Post.sync({force:true})

module.exports = Post		