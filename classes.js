class Boligrafo {
    color = "azul"
    longitud = 10

    constructor(color, longitud) {
        this.color = color

        if(longitud !== undefined) {
            this.longitud = longitud
        } else {
            this.longitud = 14
        }    
    }

    pintar(nume1, num2, num3) {}
}

let colorDeseado = "morado"

let boli1 = new Boligrafo(colorDeseado)
console.log(boli1.pintar(1))

