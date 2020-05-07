// Node Internal Module
const { join }  = require('path');
const fs  = require('fs');

class LogController {
/**
    * Log system related information on the ./logs route.
    * @func error Write to the Error.md file
    * @func info Write to the Info.md file
*/

    static fileName:string
    static errorFile:string
    static infoFile:string

    constructor(){
        LogController.fileName = new Date().toDateString().split(' ').join('-')
        LogController.errorFile = join(__dirname, `../../../logs/${LogController.fileName}-Errors.md`)
        LogController.infoFile = join(__dirname, `../../../logs/${LogController.fileName}-Info.md`) 
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
       this.write(this.errorFile, message);
    }

    static info(message: string){
        this.write(this.infoFile, message);
    }
}
    
module.exports = LogController;