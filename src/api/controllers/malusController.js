const CSV_MAL = 'malus.csv';
const parseService = require('../services/parseService.js');

exports.getMalus = async (req, res) => {
    const MAL = await parseService.parseFile(CSV_MAL)
    .then(malus => {
        return results = malus[Math.floor(Math.random() * malus.length)]
    });

    res.json({...MAL})
}