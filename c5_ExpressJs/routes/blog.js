const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Blog home page');
} );

router.get('/about', (req, res) => {
    res.send('About  blog page');
} );

router.get('/contact', (req, res) => {
    res.send('Contact blog page');
} );

module.exports = router;