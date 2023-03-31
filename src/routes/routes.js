const express = require('express');
const router = express.Router();
const PaginaInicio = require('../PaginaInicio');

router.get('/home',(req, res) => {
    res.render('home', { componente: <PaginaInicio /> });
  });
  
  module.exports = router;