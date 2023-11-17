const express = require('express');
const eventsController = require('../controllers/eventController');
const router = express.Router();

router.get('/', eventsController.index);
router.post('/', eventsController.store);
router.put('/:event', eventsController.update);

module.exports = router;