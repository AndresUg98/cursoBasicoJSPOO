//objeto literal
const natalia = {
    name: "Natalia",
    edad: 20,
    cursosAprovados:[
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],

    aprobarCurso(nuevoCursito){
        this.cursosAprovados.push(nuevoCursito);
    },
};

//Hacer que natalia apruebe otro curso
natalia.cursosAprovados.push("Curso de Responsive Design");

// Creando nuestro primer proptotipo

function Student (name, age, cursosAprovados){
    this.name = name;
    this.age = age;
    this.cursosAprovados = cursosAprovados;


}

Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprovados.push(nuevoCursito);
}


const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a los videojuegos",
        "Curso de Creacion de personajes"
    ]
);