// Index Route

const express = require('express');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers');
const { errorHandler } = require('../middleware')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register')
});

/* POST /register */
router.post('/register', errorHandler(postRegister));

/* GET /login */
router.get('/login', (req, res, next) => {
  res.send('GET /login')
});

/* POST /login */
router.post('/login', postLogin);

/* GET /logout */
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
})

/* GET /profile */
router.get('/profile', getLogout);

/* PUT /profile/user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id')
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot')
});

/* PUT /forgot-pw */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot')
});

/* GET /reset-pw/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token')
});

/* PUT /reset-pw/:token */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token')
});

module.exports = router;