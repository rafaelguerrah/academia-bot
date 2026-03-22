const express = require('express');
const router = express.Router();
const { listarHorarios } = require('../controller/horariosController');

router.get('/', listarHorarios);

module.exports = router;