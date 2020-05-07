// Node Internal Module
const { join } = require('path');
const fs = require('fs');
class LogController {
    constructor() {
        LogController.fileName = new Date().toDateString().split(' ').join('-');
        LogController.errorFile = join(__dirname, `../../../logs/${LogController.fileName}-Errors.md`);
        LogController.infoFile = join(__dirname, `../../../logs/${LogController.fileName}-Info.md`);
    }
    static write(file, message) {
        fs.appendFile(file, message, (err) => {
            if (err) {
                throw { err, message: 'Error while trying to create/save the file.' };
            }
        });
    }
    static error(message) {
        this.write(this.errorFile, message);
    }
    static info(message) {
        this.write(this.infoFile, message);
    }
}
module.exports = LogController;
//# sourceMappingURL=index.js.map