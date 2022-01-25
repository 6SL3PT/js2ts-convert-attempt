"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HelloJson_1 = require("../../data/HelloJson");
const router = express_1.default.Router();
const helloJson = new HelloJson_1.exportedHJson;
router.get('/', (req, res) => {
    return res.json(helloJson.getData());
});
module.exports = router;
