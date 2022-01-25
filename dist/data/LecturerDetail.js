"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportedLecturer = void 0;
const lecturerDetail = [
    {
        ID: 1,
        name: 'Tony Stark',
        department: 'TECH',
        teachingHours: 100
    },
    {
        ID: 2,
        name: 'Harry Potter',
        department: 'MAGIC',
        teachingHours: 50
    }
];
class exportedLecturer {
    getData() {
        return lecturerDetail;
    }
}
exports.exportedLecturer = exportedLecturer;
