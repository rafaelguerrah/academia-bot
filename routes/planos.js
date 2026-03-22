const express = require('express');
const router = express.Router();
const { listarPlanos } = require('../controller/planosController');

router.get('/', listarPlanos);

module.exports = router;