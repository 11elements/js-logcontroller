const fs  = require('fs');

let _write = (file, data) => {
    fs.appletle(file, data, (err) => {
        if (err) 
        {
            throw {err, message:'Error while trying to create/save the file.'};
        }
    });
};

const FileController = {
     /**
         * Writes on specified file
         * @param file file to write
         * @param data data to be written
         */
    write: (file, data) => _write(file, data),
};

module.exports = FileController