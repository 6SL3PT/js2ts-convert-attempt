"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const CourseDetail_1 = require("../../data/CourseDetail");
router.get('/', (req, res) => {
    const exCourse = new CourseDetail_1.exportedCourse;
    const courseDetail = exCourse.getData();
    const semesterInput = req.query.semester;
    const isActive = (req.query.active === 'true');
    const isNotActive = (req.query.active === 'false');
    // search by name (not efficient)
    // const nameInput = req.query.name;
    // if(nameInput){
    //     type lowerCaseName = {
    //         name: String
    //     };
    //     const courseLower: lowerCaseName[] = [];
    //     courseDetail.forEach(course => {
    //         courseLower.push({name: course.name.toLowerCase()}); 
    //     });
    //     const found = courseLower.some(course => course.name === String(req.query.name).toLowerCase());
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
    if (isActive && semesterInput) {
        const found = courseDetail.some(course => course.active === true && course.semester === Number(req.query.semester));
        if (found) {
            return res.json({ data: courseDetail.filter(course => course.active === true && course.semester === Number(req.query.semester)) });
        }
        else {
            return res.status(400).json({ error_message: `Request 'semester=${req.query.semester}' and 'active=${req.query.active}' is not found.` });
        }
    }
    else if (isNotActive && semesterInput) {
        const found = courseDetail.some(course => course.active === false && course.semester === Number(req.query.semester));
        if (found) {
            return res.json({ data: courseDetail.filter(course => course.active === false && course.semester === Number(req.query.semester)) });
        }
        else {
            return res.status(400).json({ error_message: `Request 'semester=${req.query.semester}' and 'active=${req.query.active}' is not found.` });
        }
    }
    if (isActive) {
        return res.json({ data: courseDetail.filter(course => course.active === true) });
    }
    else if (isNotActive) {
        return res.json({ data: courseDetail.filter(course => course.active === false) });
    }
    const otherInvalidActive = req.query.active;
    if (otherInvalidActive) {
        return res.status(400).json({ error_message: `Input 'active=${req.query.active}' is invalid (boolean data type only.)` });
    }
    if (semesterInput) {
        const found = courseDetail.some(course => course.semester === Number(req.query.semester));
        if (found) {
            return res.json({ data: courseDetail.filter(course => course.semester === Number(req.query.semester)) });
        }
        else {
            return res.status(400).json({ error_message: `Request 'semester=${req.query.semester}' is not found.` });
        }
    }
    res.json({ data: courseDetail });
});
router.get('/:course_code', (req, res) => {
    const exCourse = new CourseDetail_1.exportedCourse;
    const courseDetail = exCourse.getData();
    const found = courseDetail.some(course => course.code === req.params.course_code);
    if (found) {
        res.json({ data: courseDetail.filter(course => course.code === req.params.course_code) });
    }
    else {
        res.status(400).json({ error_message: `Course ${req.params.course_code} is not found.` });
    }
});
module.exports = router;
