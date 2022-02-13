class Classes{

    constructor(
        name,
        teacher,
        duration,
        comments = undefined
    ){
        this.name =  name;
        this.teacher = teacher;
        this.duration = duration;
        this.comments = comments;
    }
}

const queEsLaProgramacion = new Classes({
    name: '¿Que es la programacion?',
    teacher: 'Freddy Vega',
    duration: 9200,
    
});


class Course{

    constructor(
        name,
        classes = []
    ){
        this._name =  name;
        this.classes = classes
    }

    //obteniendo el nombre
    get name(){
        return this._name;
    }

    set name(nuevoNombrecito){
        if( nuevoNombrecito === "curso Malito de Programacion Basica"){
            console.error("Web..no");
        }else{
            this._name = nuevoNombrecito;
        }

        
    };
}

const cursoProgramacionBasica = new Course({
    name: 'Curso gratis de Programacion Basica',
    classes:[
        queEsLaProgramacion,
    ]
});

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS',
});

const cursoMaterialDesign = new Course({
    name: 'Curso Material Design',
});


class LearningPaths {
    constructor(
        schoolName,
        courses = []
    ){
        this.schoolName =  schoolName;
        this.courses = courses
    }

};

const escuelaWeb = new LearningPaths({
    schoolName: 'Escuela de Desarrollo Web',
    courses:[
        cursoProgramacionBasica,
        cursoMaterialDesign,
        cursoDefinitivoHTML,
    ]
});

const escuelaVideoJuegos = new LearningPaths({
    schoolName: 'Escuela de Videojuegos',
    courses:[
        'Curso introduccion la los vidojuegos',
        'Curso Unity',
        'curso Modelado 3D'
    ]
});

const escuelaData = new LearningPaths({
    schoolName: 'Escuela de Data Science',
    courses:[
        'Curso de Big Data',
        'Curso de Bussines Inteligence',

    ]
});

class Student{
    constructor(
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    ) {

        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
       
        
    }
    
};

const juan2 = new Student({
    name: 'JuanDc',
    username: 'juandc',
    email: 'juan@gmail.com',
    twitter: 'fjuandc',
    learningPaths:[
        escuelaWeb,
        escuelaVideoJuegos,
    ]
})

const miguelito2 = new Student({
    name: 'Miguel',
    username: 'MigelFeliz',
    email: 'miguel@gmail.com',
    twitter: 'miguelito_Feliz',
    learningPaths:[
        escuelaWeb,
        escuelaData,
    ]
})