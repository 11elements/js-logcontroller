const fs  = require('fs');

let _write = (file, data) => {
    let { join }  = require('path');
        let dir = join(__dirname, `../../../../logs/`);
        
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }

    fs.appendFile(file, data, (err) => {
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