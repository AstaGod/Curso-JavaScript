//diseñar una clase para mi entidad celular.
//tendra como atributo numero, marca, modelo, capacidad de bateria.
//tendra como metodos encender, apagar, llamar, colgar, enviar mensaje
class Celular {
    // Atributos
    constructor(numero, marca, modelo, capacidadBateria) {
        this.numero = numero;
        this.marca = marca;
        this.modelo = modelo;
        this.capacidadBateria = capacidadBateria;
        this.encendido = false;
    }

    // Métodos
    encender() {
        if (!this.encendido) {
            this.encendido = true;
            return "El celular se está encendiendo...";
        } else {
            return "El celular ya está encendido.";
        }
    }

    apagar() {
        if (this.encendido) {
            this.encendido = false;
            return "El celular se está apagando...";
        } else {
            return "El celular ya está apagado.";
        }
    }

    llamar(numeroDestino) {
        if (this.encendido) {
            return `Llamando al número ${numeroDestino} desde el número ${this.numero}...`;
        } else {
            return "Primero necesitas encender el celular.";
        }
    }

    colgar() {
        return "Llamada finalizada.";
    }

    enviarMensaje(numeroDestino, mensaje) {
        if (this.encendido) {
            return `Enviando mensaje a ${numeroDestino}: "${mensaje}"`;
        } else {
            return "Primero necesitas encender el celular.";
        }
    }
}

// Ejemplo de uso:
let miCelular = new Celular("1234567890", "Samsung", "Galaxy S21", "4000mAh");

console.log(miCelular.encender());       // Salida: "El celular se está encendiendo..."
console.log(miCelular.llamar("0987654321")); // Salida: "Llamando al número 0987654321 desde el número 1234567890..."
console.log(miCelular.enviarMensaje("0987654321", "Hola, ¿cómo estás?")); // Salida: "Enviando mensaje a 0987654321: 'Hola, ¿cómo estás?'"
console.log(miCelular.apagar());         // Salida: "El celular se está apagando..."
