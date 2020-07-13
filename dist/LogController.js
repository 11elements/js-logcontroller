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
const { EventEmitter } = require('events');
class LogController extends EventEmitter {
    constructor() {
        super();
        this.getFileName = (action) => __awaiter(this, void 0, void 0, function* () {
            try {
                let fileName = new Date().toDateString().split(' ').join('-');
                return join(__dirname, `../../../../logs/${fileName}-${action}.md`);
            }
            catch (error) {
                throw error;
            }
        });
        this.writeError = function (message) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let errorFile = yield this.getFileName('error');
                    message = `####################-- ERROR LOG --######################## \n\n
                            ${message}\n\nlog created on: ${new Date()} 
                    \n\n####################-- END ERROR LOG --#################### \n`;
                    this.emit('done', true);
                    return write(errorFile, message);
                }
                catch (error) {
                    this.emit('failed', false);
                    throw error;
                }
            });
        };
        this.writeInfo = function (message) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let infoFile = yield this.getFileName('info');
                    message = `####################-- INFO LOG --######################## \n\n
                            ${message}\n\nlog created on: ${new Date()} 
                    \n\n####################-- END INFO LOG --#################### \n`;
                    this.emit('done', true);
                    return write(infoFile, message);
                }
                catch (error) {
                    this.emit('failed', false);
                    throw error;
                }
            });
        };
    }
}
module.exports = LogController;
//# sourceMappingURL=LogController.js.map