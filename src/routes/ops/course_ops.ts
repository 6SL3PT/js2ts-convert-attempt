import express, {Request, Response} from 'express';
const router = express.Router();
import { exportedCourse } from '../../data/CourseDetail';

router.get('/', (req: Request, res: Response) => {
    const exCourse = new exportedCourse;
    const courseDetail = exCourse.getData();

    const semesterInput: any = req.query.semester;
    const isActive: boolean = (req.query.active === 'true');
    const isNotActive: boolean = (req.query.active === 'false');

    // search by name (worked, but I think it's not efficient)

    // const nameInput = req.query.name;

    // if(nameInput){
    //     type lowerCaseName = {
    //         name: string
    //     };
    //     const courseLower: lowerCaseName[] = [];

    //     courseDetail.forEach(course => {
    //         courseLower.push({name: course.name.toLowerCase()}); 
    //     });

    //     const found: boolean = courseLower.some(course => course.name === String(req.query.name).toLowerCase());

    //     if(found){
    //         courseLower.forEach(course => {
    //             if(course.name === String(req.query.name).toLowerCase()){
    //                 return res.json(courseDetail[courseLower.indexOf(course)]);
    //             }
    //         });
    //     } else{
    //         return res.status(400).json({error_message: `Input 'name=${req.query.name}' is not found.`});
    //     }
    // }

    if(isActive && semesterInput){
        const found: boolean = courseDetail.some(course => course.active === true && course.semester === Number(req.query.semester))
        
        if(found){
            return res.json({data: courseDetail.filter(course => course.active === true && course.semester === Number(req.query.semester))});
        } else{
            return res.status(400).json({error_message: `Request 'semester=${req.query.semester}' and 'active=${req.query.active}' is not found.`})
        } 
    } else if(isNotActive && semesterInput){
        const found: boolean = courseDetail.some(course => course.active === false && course.semester === Number(req.query.semester))
        
        if(found){
            return res.json({data: courseDetail.filter(course => course.active === false && course.semester === Number(req.query.semester))});
        } else{
            return res.status(400).json({error_message: `Request 'semester=${req.query.semester}' and 'active=${req.query.active}' is not found.`})
        }
    }

    if(isActive){
        return res.json({data: courseDetail.filter(course => course.active === true)});
    } else if(isNotActive){
        return res.json({data: courseDetail.filter(course => course.active === false)});
    } 

    const otherInvalidActive: any = req.query.active;
    
    if(otherInvalidActive){
        return res.status(400).json({error_message: `Input 'active=${req.query.active}' is invalid (boolean data type only.)`});
    }

    if(semesterInput){
        const found: boolean = courseDetail.some(course => course.semester === Number(req.query.semester));
        if(found){
            return res.json({data: courseDetail.filter(course => course.semester === Number(req.query.semester))});
        } 
        else{
            return res.status(400).json({error_message: `Request 'semester=${req.query.semester}' is not found.`});
        }
    }

    res.json({data: courseDetail});
});

router.get('/:course_code', (req, res) => {
    const exCourse = new exportedCourse;
    const courseDetail = exCourse.getData();

    const found: boolean = courseDetail.some(course => course.code === req.params.course_code);
    if(found){
        res.json({data: courseDetail.find(course => course.code === req.params.course_code)});
    } 
    else{
        res.status(400).json({error_message: `Course ${req.params.course_code} is not found.`});
    }
});

module.exports = router;