function create(student, students) {
  students.push(student);
  return students;
}

function read(students) {
  students.forEach((s) => {
    console.log("Nombre: " + s.name);
    console.log("Numero de control: " + s.controlNumber);
  });
}

function erase(nc, students) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].controlNumber == nc) {
      students.splice(i, 1);
      break;
    }
  }
  return students;
}

function update(nc, campos, cambios, students) {
  if (campos.length != cambios.length) {
    console.log("El tamaño de los campos y los cambios no son el mismo");
    return;
  }
  let i = 0;
  for (i; i < students.length; i++) {
    if (students[i].controlNumber == nc) {
      break;
    }
  }
  for (let j = 0; j < campos.length; j++) {
    switch (campos[j]) {
      case "name":
        students[i].name = cambios[j];
        break;
      case "controlNumber":
        students[i].controlNumber = cambios[j];
        break;
      case "email":
        students[i].email = cambios[j];
        break;
      case "grade":
        students[i].grade = cambios[j];
        break;
    }
  }
  return students;
}
//Ver estudiante por nc
function estudiante(nc, students) {
  let i = 0;
  for (i; i < students.length; i++) {
    if (students[i].controlNumber == nc) {
      break;
    }
  }
  if (i >= students.length) {
    console.log("No existe ese alumno");
    return;
  }
  console.log("Nombre: " + students[i].name);
  console.log("Email: " + students[i].email);
  console.log("Calificación: " + students[i].grade);
  return;
}
function aprobatoria(students) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 70) {
      console.log(students[i].name);
    }
    return;
  }
}

module.exports.create = create;
module.exports.read = read;
module.exports.erase = erase;
module.exports.update = update;
module.exports.estudiante = estudiante;
module.exports.aprobatoria = aprobatoria;
