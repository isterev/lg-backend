"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const LunchController = require('../controllers/lunch');


router.get('/', LunchController.list);
router.post('/', middlewares.checkAuthentication, LunchController.create);
router.get('/:id', LunchController.read);
router.put('/:id', middlewares.checkAuthentication, LunchController.update);
router.delete('/:id', middlewares.checkAuthentication, LunchController.remove);


module.exports = router;