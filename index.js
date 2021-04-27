let model = require("./student");

let students = [];

let student = {
  name: "Alexis Torres Acosta",
  controlNumber: "17401086",
  email: "altorresac@ittepic.edu.mx",
  grade: 90,
};

let student2 = {
  name: "Romero Javier",
  controlNumber: "12345678",
  email: "Romero@ittepic.edu.mx",
  grade: 80,
};

let student3 = {
    name: "Jose Vazquez",
    controlNumber: "164572",
    email: "Vazquez@ittepic.edu.mx",
    grade: 60,
  };

  students = model.create(student, students);
  students = model.create(student2, students);
  students = model.create(student3, students);
  model.read(students);
  console.log("------Despues de borrar------");
  model.erase(17401086,students);
  model.read(students);
  console.log("------Buscar------");
  model.estudiante(164572,students);
  console.log("------Aprobados------");
  model.aprobatoria(students);
  console.log("------UPDATE Por numero de control------");
  model.update(12345678,["name","grade"],["Alan Torres", "99"],students);
  model.estudiante(12345678,students);







/*
students = model.create(student, students);
students = model.create(student2, students);
console.log("------Despues de crear------");
model.read(students);

students = model.erase(0,students)
console.log("------Despues de borrar------");
model.read(students);
let student3 = {
    name: "Javier Torres",
    controlNumber: "1234",
    email: "tttt@ittepic.edu.mx",
    grade: 90,
  };
console.log("------Despues de insertar por segunda vez------");
students = model.create(student3,students);
model.read(students);
console.log("------update------");
students = model.update(0,{name:"Martin",controlNumber:"1234",email:"martin@ittepic.edu.mx",grade:"86"},students);
model.read(students);*/