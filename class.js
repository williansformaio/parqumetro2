class Parquimetro {
    constructor(tempo) {
        this.tempo = tempo;
    }

    calcularValor() {
        if (this.tempo <= 30) {
            return 1.00;
        } else if (this.tempo <= 50) {
            return 1.75;
        } else if (this.tempo <= 120) {
            return 3.00;
        }
    }
}
