



function videoPlay(id){
    const urlSecreta = "https:://platzisecreto.com" + id;
    console.log("Se esta reproduciendo desde la url " + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https:://platzisecreto.com" + id;
    console.log("Pausamos desde la url " + urlSecreta);
}




class Classes{

    constructor({
        name,
        videoID,
    }){
        this.name =  name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID)
    }

    pausar(){
        videoStop(this.videoID)
    }
}

const queEsLaProgramacion = new Classes({
    name: '¿Que es la programacion?',
    teacher: 'Freddy Vega',

    
});


class Course{

    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name =  name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
    isFree: true,
    
});

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS',
    lang:"English"
});

const cursoMaterialDesign = new Course({
    name: 'Curso Material Design',
});


class LearningPaths {
    constructor({
        schoolName,
        courses = []
    }){
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
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {

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
    
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.isFree) {
            this.approveCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.lang !== "English") {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){

        this.approvedCourses.push(newCourse);
       
    }
}



const juan = new FreeStudent({
    name: 'JuanDc',
    username: 'juandc',
    email: 'juan@gmail.com',
    twitter: 'fjuandc',
    learningPaths:[
        escuelaWeb,
        escuelaVideoJuegos,
    ],
});

const miguelito = new BasicStudent({
    name: 'Miguel',
    username: 'MigelFeliz',
    email: 'miguel@gmail.com',
    twitter: 'miguelito_Feliz',
    learningPaths:[
        escuelaWeb,
        escuelaData,
    ],
});