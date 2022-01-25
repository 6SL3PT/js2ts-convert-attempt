import express, {Request, Response} from 'express';
const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    res.json({concat_string : `${req.body.str1}-${req.body.str2.toUpperCase()}`});
});

module.exports = router;