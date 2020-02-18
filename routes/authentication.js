'use strict';

const { Router } = require('express');
const router = new Router();


router.get('/sing-up', (req, res) => {
  res.render('sing-up');
});

router.get('/sing-in', (req, res) => {
  res.render('sing-in');
});

module.exports = router;