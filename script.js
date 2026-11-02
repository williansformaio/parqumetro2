
const tempo = document.getElementById("tempo");
const valorPagar = document.getElementById("valorPagar");
const div2 = document.getElementById("div2");

let parquimetro;

tempo.addEventListener("change", () => {
    parquimetro = new Parquimetro(Number(tempo.value));

    let valor = parquimetro.calcularValor();

    valorPagar.textContent = `O valor que você terá que pagar é: R$ ${valor.toFixed(2)}`;

    div2.style.display = "block";
});

