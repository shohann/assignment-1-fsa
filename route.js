const router = require('express').Router();
const controllerFuncs = require('./controller');

router.get('/health', controllerFuncs.healthCheck)
router.post('/person', controllerFuncs.generatePerson)

module.exports = router;