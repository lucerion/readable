const express = require('express');
const { PageController, APIController } = require('./controllers');

const router = express.Router();

router.post('/api/page', APIController.create);

router.get('/', PageController.index);
router.post('/', PageController.create);
router.get('/:hash', PageController.show);

module.exports = router;
