// Node Internal Module
const { join }  = require('path');
const { write } = require('./FileController');

// Log Files declaration
const checkDate = async (action:string) =>{
    try{
        let fileName = new Date().toDateString().split(' ').join('-');

        if(action==="error"){
            return join(__dirname, `../../../../logs/${fileName}-Errors.md`);
        }
        return join(__dirname, `../../../../logs/${fileName}-Info.md`);
    }catch(error){
        throw error;
    }
   
}


const writeError = async function(message:string, action:string){
    const errorFile = await checkDate(action);
    message = `####################-- ERROR LOG --######################## \n\n
                       ${message} \nlog created on: ${new Date()} 
               \n\n####################-- END ERROR LOG --#################### \n`
    write(errorFile, message);
    return true;
}

const writeInfo = async (message:string, action:string) => {
    const infoFile = await checkDate(action);
    message = `####################-- INFO LOG --######################## \n\n
                      ${message} \nlog created on: ${new Date()} 
                \n\n####################-- END INFO LOG --#################### \n`
    write(infoFile, message);
    return true;
}

const LogController = {
    error: (message:string) => writeError(message, "error"),
    info:  (message:string) => writeInfo(message, "info"),
}

module.exports = LogController;