"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const moment_1 = __importDefault(require("moment"));
const logger = (req, res, next) => {
    console.log(`${(0, moment_1.default)().format()}: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};
exports.logger = logger;
