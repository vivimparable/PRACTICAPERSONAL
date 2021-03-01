
//ESTRUCTURA CONSTRUCTORA//
function Alumno (Nombre, Apellido, Edad, Cumpleanios){
  this.Nombre = Nombre;
  this.Apellido = Apellido;
  this.Edad = Edad;
  //SE COLOCA LA MISMA ESTRUCTURA PERO CON EL NEW DATE LA FECHA DE 
  //NACIMIENTO SE PASARÁ A UNA FECHA ENTERA.
  this.Cumpleanios = new Date(Cumpleanios)
}
//SE ESTABLECEN NEW ALUMNOS CON LA CONSTANTE//
const Alumno1= new Alumno ("Javier", "garcia", "24", "10-12-1989")
const Alumno2= new Alumno ("Sasha", "Maike", 55)
const Alumno3= new Alumno ("Noah", "Perola", 12)

//PRINTADO//
console.log(Alumno1);
console.log(Alumno2.Edad);
console.log(Alumno3);