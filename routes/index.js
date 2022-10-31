const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// 배포할 내용 ?
router.get('/main', (req, res) => {
  res.render('main',);
})

module.exports = router;
