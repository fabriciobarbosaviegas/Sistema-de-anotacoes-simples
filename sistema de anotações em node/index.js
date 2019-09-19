// Chamada dos modulos da aplicação

const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Config

	// Template Engine

		app.engine('handlebars', handlebars({defaultLayout: 'main'}))
		app.set('view engine', 'handlebars')

	// Body Parser

		app.use(bodyParser.urlencoded({extended: false}))
		app.use(bodyParser.json())
	
// Rotas

// '.get' cria uma rota do tipo get

	app.get('/cad', function(req,res){

	// 'render' renderiza o arquivo handlebars dentro da pasta views('form')

		res.render('form')
	})

// pedido de exibição das postagens

	app.get('/', function(req, res){
		Post.findAll({order:[['id', 'desc']]}).then(function(posts){
			res.render('home', {posts: posts})
		})
	})

// deletar posts

	app.get('/deletar/:id', function(req, res){
		Post.destroy({where: {"id": req.params.id}}).then(function(){
			res.redirect('/')
		}).catch(function(erro){
			res.send('postagem não encontrada')
		})
	})

// '.post' cria uma rota do tipo post

	app.post('/add', function(req,res){

	// 'create' cria um registro em uma coluna do banco de dados(Post)

		Post.create({

		// 'req faz uma requisão de um item handlebars(body.titulo)'

			titulo: req.body.titulo,
			conteudo: req.body.conteudo
		}).then(function(){

		// 'redirect' redireciona para uma rota(/)

			res.redirect('/')
		}).catch(function(){
			res.send('Ocorreu um erro' + erro)
		})		
	})

// Criação do servidor local

app.listen(8080, function(){
	console.log('Rodando!!')
})