const express = require('express');
const { PageController } = require('./controllers');

const router = express.Router();

router.get('/', PageController.index);
router.get('/:hash', PageController.show);

module.exports = router;
