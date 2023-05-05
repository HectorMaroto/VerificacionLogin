/* Variables */

//Java
//int numero = 123;

let hola = 1;
hola = "alejandro"

//var numero = 123.65654;
var test = "asdasdas";
test = false;
test = null;

let num1 = 1.736354
let num2 = 1.736363


if(num1 === num2) {
    //SIEMPRE
} else if(num1 === num2) {} else if (num1 === num2) {

} else {

}


/* Bucles */

/*for(let i = 100; i > 0; i += 10) {
    console.log(i)
}*/

let numerosenlinea = "";

/*for(let j = 0; j < 100; j++) {
    numerosenlinea = numerosenlinea + " " + j
} */

console.log(numerosenlinea)

console.log("----------")

let indice = 0;

let encontrado = false;

/*while(!encontrado) {
    //Lo que queremos hacer
    console.log(indice)

    //indice = indice+1;
    //Son iguales
    indice++;

    encontrado = true;
} */

console.log("-------")

/*
do {
    //Lo que queremos hacer
    console.log(indice)

    //indice = indice+1;
    //Son iguales
    indice++;

    encontrado = true;
} while (!encontrado)  */

let numeros = [0,1,2678,3,78];

/*for(let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    console.log(numero)
} */

//Si vais a modificar
//let numero of numeros
//Si no vais a modificar
//const numero of numeros
/*for(const numero of numeros) {
    console.log(numero)
}*/

var coche = {
    //Atributos
    ruedas: 4,
    puertas: 4,
    marca: "Chevrolet",
    encendido: false,

    //Metodos
    arrancar: function() {
        console.log("Arrancado")
        this.encendido = true;
    },
    apagar: function() {
        if(this.encendido === true) {
            this.encendido = false;
            console.log("Apagado")
        } else {
            console.log("Ya está apagado!")
        }
    }
}

let array = [1,2,3,5]

let elementoBuscado = array.find(function(valor) {

    //let numeroMultiplicado = valor * 50;

    return valor === 8
});

let precios = [3.12, 5.78, 4.53, 15];

let productoprueba = {
    nombre: "Champu",
    precio: 8,
    tipo: "Higiene"
}

let productos = [
    {
        identificador: 1,
        nombre: "Champu",
        precio: 8,
        tipo: "Higiene"
    },
    {
        identificador: 2,
        nombre: "Patatas",
        precio: 12,
        tipo: "Comida"
    },
    {
        identificador: 3,
        nombre: "Tiritas",
        precio: 2,
        tipo: "Higiene"
    },
    {
        identificador: 4,
        nombre: "Crema",
        precio: 17,
        tipo: "Higiene",
    },
   
]

productos = productos.map(function(producto) {
    if(producto.tipo === "Higiene") {
        producto.precio = producto.precio + ((20 * producto.precio) / 100)
    } else {
        producto.precio = producto.precio + ((40 * producto.precio) / 100)
    }
    //producto.precio = 20;
    return producto;
});

//console.log(productos)

let existe = productos.includes(productoprueba)

let mapa = new Map();
mapa.set("nombre", "Crema")
mapa.set("precio", 17)
mapa.set("tipo", "Higiene")

let setEjemplo = new Set();
setEjemplo.add(productos[0].identificador)
setEjemplo.add(productos[1].identificador)
setEjemplo.add(productos[2].identificador)
setEjemplo.add(productos[3].identificador)

setEjemplo.size //Tamaño del set (4)

/*mapa.forEach(function(clave, valor) {

})

for(const [clave, valor] of mapa){
    
}*/

//Array.from(setEjemplo)




//console.log(productos)

/*precios = precios.map(function(valor) {
    return valor * 3;
});
console.log(precios)*/



/*while(!encontrado) {
    indice++;

    if(array[indice] === 4) {
        encontrado = true;
    }
}*/

//console.log(array[indice])


//console.log(elementoBuscado)

if(elementoBuscado === undefined) {
    console.log("NO EXISTE!")
}



let estaCambiado = false;

window.addEventListener('load', function() {

    //AQUI YA HA CARGADO TODO

    let parrafos = document.getElementsByClassName("bonitoParrafo");
    console.log(parrafos)
    for(const parrafo of parrafos) {
        parrafo.style.color = "blue";
        //parrafo.style.fontSize = "8px";
        //parrafo.innerHTML = "Esto es un texto <strong>bonito</strong>";
        parrafo.textContent = "Esto es un texto bonito";
    }

    let parrafoBonito = document.getElementById("parrafo");

    parrafoBonito.addEventListener("click", function(event) {

        if(estaCambiado) {
            event.target.style.color = "green"
            estaCambiado = false;
        } else {
            event.target.style.color = "red"
            estaCambiado = true;
        }
    })

    let nombre = document.getElementsByName("Nombre")[0];
        let pass = document.getElementsByName("Pass")[0];

        let nombreNormal = true;
        let passNormal = true;

        nombre.addEventListener("click", function(event) {
            if(!nombreNormal) {
                nombre.classList.remove("error")
            }
        });

        pass.addEventListener("click", function(event) {
            if(!passNormal) {
                pass.classList.remove("error")
            }
        });

    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        let nick = nombre.value;
        let passValue = pass.value


        let nickCorrecto = false;
        let passCorrecta = false;

        if(nick === "Alejandro") {
            nickCorrecto = true;
        }

        if(passValue === "programacion") {
            passCorrecta = true;
        }

        if(nickCorrecto === true && passCorrecta  === true) {
            alert("ESTAS DENTRO")

            // POST 
            // GET http://bibliotecaejemplo/login?usuario=alejandro&contra=loquesea
            // PUT
            // DELETE
            // OPTIONS



            let url = "http://localhost:8000/login?usuario="+nick+"&contra="+passValue
            url = `http://localhost:8000/login?usuario=${nick}&contra=${passValue}`

            fetch(url, {
                method: "GET",
            }).then(function(response) {
                console.log(response)
            }).catch(function(error) {
                console.warn(error)
            })

            //enviarInfoAlServidor().then(function(data) {
            //    console.log(data)
            //}).catch(function(error) {
            //    console.error(error)
            //}).finally(function() {
            //    console.log("Yo me ejecuto siempre")
            //})


        } else {
            if(nickCorrecto === false) {
                nombre.classList.add("error")
                nombreNormal = false;
            }

            if(passCorrecta === false) {
                pass.classList.add("error")
                passNormal = false;
            }

            //alert("Nombre de usuario o pass incorrecto")
        }

        /*if(nick === "Alejandro" && passValue === "programacion") {
            alert("ESTAS DENTRO")
        } else {
            alert("Nombre de usuario o pass incorrecto")
        }*/
    });


})


async function enviarInfoAlServidor() {
    return new Promise(function(resolve, reject) {
        let daError = enviamosInfo();
        //HACEMOS COSAS

        let datosrecibidos = {
            "hola": "quetal"
        }

        if(daError) {
            reject({
                error: 1234,
                motivo: "Porque si"
            })
        }

        resolve(datosrecibidos);
    });
}

function enviamosInfo() {
    return false
}



















