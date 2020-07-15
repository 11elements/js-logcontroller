// Node Internal Module
const { join }  = require('path');
const { write } = require('./FileController');
const { EventEmitter } = require('events');

class LogController extends EventEmitter{

    static getFileName : Promise<string>;
    static writeError : Promise<Boolean>;
    static writeInfo : Promise<Boolean>;

    constructor(){
        super();
    }

    getFileName = async (action:string) : Promise<string> =>{
        try{
            let fileName = new Date().toDateString().split(' ').join('-');
            return join(__dirname, `../../../../logs/${fileName}-${action}.md`);
        }catch(error){
            throw error;
        }   
    }

    writeError = async function(message:string) : Promise<Boolean>{
        try{
            let errorFile = await this.getFileName('error');

            message = JSON.stringify(message);

            message = `\n# ERROR LOG\n### ${message}
                    \n### log created on: ${new Date()} 
                    \n# END ERROR LOG\n`

            return write(errorFile, message);

        }catch(error){
            throw error;
        }
    }

    writeInfo = async function(message:string) : Promise<Boolean>{
        try{  
            let infoFile = await this.getFileName('info');

            message = JSON.stringify(message);

            message = `\n# INFO LOG\n\n${message}
                    \n### log created on: ${new Date()} 
                    \n# END INFO LOG\n`
    
            return write(infoFile, message);
        }catch(error){
            throw error;
        }
    }
}

module.exports = LogController;