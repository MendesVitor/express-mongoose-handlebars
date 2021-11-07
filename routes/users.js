const express = require('express');
const router = express.Router();
const service = require('./../services/users');

router.get('/login', service.login);
router.get('/register', service.register);
router.post('/signin', service.signin);
router.post('/create', service.create);

module.exports = router;