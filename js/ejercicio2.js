
let listaNumeros = [];

let input = document.getElementById("numero");
let lista = document.getElementById("lista");
let suma = document.getElementById("suma");
let promedio = document.getElementById("promedio");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");

function agregarNumero() {
    let numero = parseFloat(input.value);

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        input.style.backgroundColor = "salmon";
        input.focus();
        return;
    }

    input.style.backgroundColor = "#fff";
    listaNumeros.push(numero);
    input.value = "";
    input.focus();
    mostrarResultados();
}

function mostrarResultados() {
    lista.innerHTML = "";
    let total = 0;
    let mayor = listaNumeros[0];
    let menor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        lista.innerHTML += `<li>${listaNumeros[i]}</li>`;
        total += listaNumeros[i];

        if (listaNumeros[i] > mayor) {
            mayor = listaNumeros[i];
        }

        if (listaNumeros[i] < menor) {
            menor = listaNumeros[i];
        }
    }

    let media = total / listaNumeros.length;

    suma.textContent = `Suma: ${total}`;
    promedio.textContent = `Promedio: ${media.toFixed(2)}`;
    mayor.textContent = `Mayor número: ${mayor}`;
    menor.textContent = `Menor número: ${menor}`;
}
