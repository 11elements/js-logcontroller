// Node Internal Module
const { join }  = require('path');
const fs  = require('fs');

const _fileName = new WeakMap();
const _errorFile = new WeakMap();
const _infoFile = new WeakMap();

class LogController {
/**
    * Log system related information on the ./logs route.
    * @func error Write to the Error.md file
    * @func info Write to the Info.md file
*/

    constructor(){
        _fileName.set(this, new Date().toDateString().split(' ').join('-'));
        _errorFile.set(this, join(__dirname, `../../../logs/${_fileName}-Errors.md`));
        _infoFile.set(this, join(__dirname, `../../../logs/${_fileName}-Info.md`));
    }

    static write(file:string, message:string){
        fs.appendFile(file, message, (err:Error) => {
            if (err) 
            {
                throw {err, message:'Error while trying to create/save the file.'};
            }
        });
    }
  
    static error(message:string){
       this.write(_errorFile.get(this), message);
    }

    static info(message: string){
        this.write(_infoFile.get(this), message);
    }
}
    
module.exports = LogController;