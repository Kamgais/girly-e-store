const { getAllCountries } = require('../controllers/country.controller');

const router = require('express').Router();


router.get('/', getAllCountries());

module.exports = router;