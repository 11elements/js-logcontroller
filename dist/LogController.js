var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Node Internal Module
const { join } = require('path');
const { write } = require('./FileController');
// Log Files declaration
let fileName = new Date().toDateString().split(' ').join('-');
const errorFile = join(__dirname, `../../../../logs/${fileName}-Errors.md`);
const infoFile = join(__dirname, `../../../../logs/${fileName}-Info.md`);
const writeError = function (message) {
    return __awaiter(this, void 0, void 0, function* () {
        message = `####################-- ERROR LOG --######################## \n\n
                       ${message} \nlog created on: ${new Date()} 
               \n\n####################-- END ERROR LOG --#################### \n`;
        write(errorFile, message);
        return true;
    });
};
const writeInfo = (message) => __awaiter(this, void 0, void 0, function* () {
    message = `####################-- INFO LOG --######################## \n\n
                      ${message} \nlog created on: ${new Date()} 
                \n\n####################-- END INFO LOG --#################### \n`;
    write(infoFile, message);
    return true;
});
const LogController = {
    error: (message) => writeError(message),
    info: (message) => writeInfo(message),
};
module.exports = LogController;
//# sourceMappingURL=LogController.js.map