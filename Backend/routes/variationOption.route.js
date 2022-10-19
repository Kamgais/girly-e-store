const router = require('express').Router();
const {getVarOptionByVarId} = require('../controllers/variationOption.controller');



router.get('/variation/:id', getVarOptionByVarId())













module.exports = router;