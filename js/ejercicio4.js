const estudiantes = [
    { nombre: "Ana Torres", edad: 14, curso: "9A" },
    { nombre: "Mateo Ruiz", edad: 15, curso: "10B" },
    { nombre: "Lucía Gómez", edad: 13, curso: "8A" },
    { nombre: "Samuel Díaz", edad: 16, curso: "11A" },
    { nombre: "Valentina Cruz", edad: 14, curso: "9B" }
];

const inputNombreEstudiante = document.getElementById("nombre-estudiante");
const mensajeBusqueda = document.getElementById("mensaje-busqueda");
const resultadoEstudiante = document.getElementById("resultado-estudiante");

function buscarEstudiante(event) {
    event.preventDefault();
    resultadoEstudiante.replaceChildren();

    const nombreBuscado = inputNombreEstudiante.value.trim().toLocaleLowerCase("es");

    if (nombreBuscado === "") {
        mensajeBusqueda.textContent = "Escribe el nombre de un estudiante para iniciar la búsqueda.";
        inputNombreEstudiante.focus();
        return;
    }

    const estudiante = estudiantes.find(
        (actual) => actual.nombre.toLocaleLowerCase("es") === nombreBuscado
    );

    if (!estudiante) {
        mensajeBusqueda.textContent = "No se encontró un estudiante con ese nombre.";
        return;
    }

    mensajeBusqueda.textContent = "Estudiante encontrado:";

    const tarjeta = document.createElement("article");
    tarjeta.className = "student-result";

    const nombre = document.createElement("h3");
    nombre.textContent = estudiante.nombre;

    const edad = document.createElement("p");
    edad.textContent = `Edad: ${estudiante.edad} años`;

    const curso = document.createElement("p");
    curso.textContent = `Curso: ${estudiante.curso}`;

    tarjeta.append(nombre, edad, curso);
    resultadoEstudiante.append(tarjeta);
}