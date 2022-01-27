import express, { Request, Response } from 'express';
import uuidInt from 'uuid-int';
import { exportedLecturer } from '../../data/LecturerDetail';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.send("The task didn't have GET method for lecturer, better luck next time ;)");
});

router.post('/', (req: Request, res: Response) => {
    const data = new exportedLecturer;
    const lecturerDetail = data.getData();

    const found: boolean = lecturerDetail.some(lecturer => lecturer.name === req.body.name);
    if(found){
        return res.status(400).json({error_message: 'This name had already existed.'});
    } else{
        const id: number = Math.floor(Math.random() * 511);
        const generator: uuidInt.Generator = uuidInt(id)
        const newLecturer = {
            ID: generator.uuid(),
            name: req.body.name,
            department: req.body.department,
            teachingHours: req.body.teachingHours
        }

        if(!newLecturer.name || !newLecturer.department || !newLecturer.teachingHours){
            return res.status(400).json({error_message: 'Please fill in every element.'});
        }

        lecturerDetail.push(newLecturer);

        const res_data = JSON.stringify(newLecturer).replace(/[{}]/g, '').replace(/\"/g, '');
        res.send({data: res_data});
    } 
});

router.put('/:ID', (req: Request, res: Response) => {
    const data = new exportedLecturer;
    const lecturerDetail = data.getData();

    const found: boolean = lecturerDetail.some(lecturer => lecturer.ID === parseInt(req.params.ID));
    if(found){
        const updateLecturer: any = req.body;
        lecturerDetail.forEach(lecturer => {
            if(lecturer.ID === parseInt(req.params.ID)){
                lecturer.name = updateLecturer.name ? updateLecturer.name : lecturer.name;
                lecturer.department = updateLecturer.department ? updateLecturer.department : lecturer.department;
                lecturer.teachingHours = updateLecturer.teachingHours ? updateLecturer.teachingHours : lecturer.teachingHours;

                res.json({data: lecturer});
            }
        });
    } else{
        return res.status(400).json({error_message: `ID: ${req.params.ID} not exist.`});
    }
});

router.delete('/:ID', (req: Request, res: Response) => {
    const data = new exportedLecturer;
    const lecturerDetail = data.getData();

    const found: boolean = lecturerDetail.some(lecturer => lecturer.ID === parseInt(req.params.ID));
    if(found){
        lecturerDetail.forEach((lecturer, index) => {
            if(lecturer.ID === parseInt(req.params.ID)){
                lecturerDetail.splice(index, 1);
            }
        });
        return res.json({message: 'Lecturer deleted', current_data: lecturerDetail});
    } else{
        return res.status(400).json({error_message: `ID: ${req.params.ID} not exist.`});
    }
});

module.exports = router;