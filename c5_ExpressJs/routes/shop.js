const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Shop home page');
}
);

router.get('/about', (req, res) => {
    res.send('About  shop page');
}
);

router.get('/contact', (req, res) => {
    res.send('Contact shop page');
}
);

module.exports = router;