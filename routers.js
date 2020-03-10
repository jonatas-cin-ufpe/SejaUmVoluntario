const express = require("express")
var router = express.Router()

// Rota da Aplicação
router.get('/', (req, res) => res.render("index"))
router.get('/busca', (req, res) => res.render("busca"))
router.get('/cadastro', (req, res) => res.render("cadastro"))
router.post('/cadastro', (req, res) => res.render("cadastro"))
router.get('/anuncio', (req, res) => res.render("anuncio"))

module.exports = router