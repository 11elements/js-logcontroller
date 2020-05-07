// Node Internal Module
const { join }  = require('path');
const { write } = require('./FileController');

// Log Files declaration
let fileName = new Date().toDateString().split(' ').join('-')

const errorFile = join(__dirname, `../../../../logs/${fileName}-Errors.md`)
const infoFile = join(__dirname, `../../../../logs/${fileName}-Info.md`)

const writeError = async function(message){
    message = `####################-- ERROR LOG --######################## \n\n
                       ${message} \nlog created on: ${new Date()} 
               \n\n####################-- END ERROR LOG --#################### \n`
    write(errorFile, message);
    return true;
}

const writeInfo = async (message) => {
    message = `####################-- INFO LOG --######################## \n\n
                      ${message} \nlog created on: ${new Date()} 
                \n\n####################-- END INFO LOG --#################### \n`
    write(infoFile, message);
    return true;
}

const LogController = {
    error: (message) => writeError(message),
    info:  (message) => writeInfo(message),
}

module.exports = LogController;