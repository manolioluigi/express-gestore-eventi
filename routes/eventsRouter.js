const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

router.get('/', eventController.index);
router.post('/', eventController.store);
router.put('/:event', eventController.update);
//router.get('/simulate-error', eventController.simulateServerError);

module.exports = router;