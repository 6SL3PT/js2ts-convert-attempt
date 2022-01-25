"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./middleware/logger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(logger_1.logger);
app.get('/', (req, res) => {
    res.send('Please enter directory path.');
});
app.use('/hello', require('./routes/ops/hello_ops'));
app.use('/helloJson', require('./routes/ops/helloJson_ops'));
app.use('/concat', require('./routes/ops/concat_ops'));
app.use('/course', require('./routes/ops/course_ops'));
app.use('/lecturer', require('./routes/ops/lecturer_ops'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server was started at PORT:${PORT}`));
