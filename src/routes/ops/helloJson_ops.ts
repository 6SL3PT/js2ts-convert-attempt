import express, {Request, Response} from 'express';
import { exportedHJson } from '../../data/HelloJson';
const router = express.Router();

const helloJson = new exportedHJson;

router.get('/', (req: Request, res: Response) => {
    return res.json(helloJson.getData());
});

module.exports = router;