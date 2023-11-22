module.exports = (server) => {
    const malusController = require('../controllers/malusController');

    server.get('/getMalus', malusController.getMalus);
}