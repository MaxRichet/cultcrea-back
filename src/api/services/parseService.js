const fs = require('fs');
const parse = require('csv-parser');

exports.parseFile = (filename) => {
    let results = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(`./src/data/${filename}`)
            .pipe(parse({
                delimiter:';',
                columns: true,
                bom: true
            }))
            .on('data', function (row){
                results.push(row)
            })
            .on("end", function (){
                resolve(results)
            })
            .on('error', function (error){
                reject(error.message);
            });
    })
};