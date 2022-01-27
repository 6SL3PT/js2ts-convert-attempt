type Lecturer = {
    ID: number,
    name: string,
    department: string,
    teachingHours: number
}

const lecturerDetail: Lecturer[] = [
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

export class exportedLecturer{
    getData(): Lecturer[]{
        return lecturerDetail;
    }
}