const express = require('express');
const router = express.Router();

// Lista de integrantes com nomes e caminhos das imagens (armazenadas em public/images/integrantes)
const integrantes = Object.freeze([
  { nome: 'Ricardo Gabriel', img: '/images/integrantes/rick.jpeg' },
  { nome: 'Robinson Melo', img: '/images/integrantes/binho.jpeg' },
]);

// Rota da página inicial
router.get('/', (req, res) => {
  res.render('index');
});

// Rota da página de integrantes
router.get('/integrantes', (req, res) => {
  res.render('integrantes', { integrantes });
});

// Rota para o componente 1
router.get('/componente1', (req, res) => {
  res.render('componente1');
});

// Rota para o componente 2
router.get('/componente2', (req, res) => {
  res.render('componente2');
});

module.exports = router;
