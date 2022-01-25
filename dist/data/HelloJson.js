"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportedHJson = void 0;
const helloJson = {
    message: 'Hello JSON'
};
class exportedHJson {
    getData() {
        return helloJson;
    }
}
exports.exportedHJson = exportedHJson;
