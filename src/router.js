const express = require('express');
const { PageController } = require('./controllers');

const router = express.Router();

router.get('/', PageController.index);
router.post('/', PageController.create);
router.get('/:hash', PageController.show);

module.exports = router;
