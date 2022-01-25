import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req: Request, res: Response) => {
    res.send('Please enter directory path.');
});

app.use('/hello', require('./routes/ops/hello_ops'));
app.use('/helloJson', require('./routes/ops/helloJson_ops'));
app.use('/concat', require('./routes/ops/concat_ops'));
app.use('/course', require('./routes/ops/course_ops'));
app.use('/lecturer', require('./routes/ops/lecturer_ops'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server was started at PORT:${PORT}`));