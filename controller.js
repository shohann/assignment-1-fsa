const service = require('./service');

module.exports.healthCheck = (req, res, next) => {
    res.send('ok')
}

module.exports.generatePerson = (req, res, next) => {
    const selectedProperty = req.body.generatePerson;
    const person = service.randomPerson(selectedProperty)
    res.status(200).json(person)
}