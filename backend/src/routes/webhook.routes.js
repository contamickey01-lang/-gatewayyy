const express = require('express');
const webhookController = require('../controllers/webhook.controller');

const router = express.Router();

router.post('/pagarme', webhookController.handlePagarme.bind(webhookController));
router.post('/telegram', webhookController.handleTelegram.bind(webhookController));

module.exports = router;
