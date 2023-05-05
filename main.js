
class Usuario {
    constructor(nombre, apellidos, pass, email) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.pass = pass
        this.email = email
    }
}

class ErrorGenerico {
    constructor(codigo, motivo) {
        this.codigo = codigo;
        this.motivo = motivo;
    }
}

class ValidadorUsuario {
    validar(usuario) {
        //Nombre: 10 caracteres
        //Apellidos: 10 caracteres
        //Contra: 16 caracteres
        if(usuario.nombre.length > 10 ||
            usuario.nombre.length < 0) {
            return new ErrorGenerico(1, "El nombre es invalido"); //Codigo 1
        }

        if(usuario.apellidos.length > 10 || 
            usuario.apellidos.length < 0) {
            return new ErrorGenerico(2, "Los apellidos son invalidos"); //Codigo 2
        }

        if(usuario.pass.length > 16 ||
            usuario.pass.length < 0) {
            return new ErrorGenerico(3, "La pass es incorrecto"); //Codigo 3
        }

        return ErrorGenerico(0, "");
    }

    validarTodos(usuario) {
        let errores = [];
        //Nombre: 10 caracteres
        //Apellidos: 10 caracteres
        //Contra: 16 caracteres
        if(usuario.nombre.length > 10 ||
            usuario.nombre.length < 0) {
            errores.push(new ErrorGenerico(1, "El nombre es invalido"))//Codigo 1
        }

        if(usuario.apellidos.length > 10 || 
            usuario.apellidos.length < 0) {
            errores.push( new ErrorGenerico(2, "Los apellidos son invalidos")); //Codigo 2
        }

        if(usuario.pass.length > 16 ||
            usuario.pass.length < 0) {
            errores.push( new ErrorGenerico(3, "La pass es incorrecto")); //Codigo 3
        }

        return errores;
    }
}


window.addEventListener("load", function() {

    let formulario = document.getElementById("formulario")

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault()

        let alertBox = document.getElementById("alertbox");
        let alertBoxMessage = alertBox.children[0];

        let nombreInput = this.document.getElementsByName("nombre")[0]
        let apellidosInput = this.document.getElementsByName("apellidos")[0]
        let passInput = this.document.getElementsByName("password")[0]
        let emailInput = this.document.getElementsByName("email")[0]

        let nombre = nombreInput.value
        let apellidos = apellidosInput.value
        let pass = passInput.value
        let email = emailInput.value

        const usuario = new Usuario(nombre, apellidos, pass, email);

        const validador = new ValidadorUsuario();

        //let resultado = validador.validar(usuario);
        let resultados = validador.validarTodos(usuario);

        //alert(`${resultado.motivo} (Codigo ${resultado.codigo})`)

        for (const resultado of resultados) {
            //alert(`${resultado.motivo} (Codigo ${resultado.codigo})`)

            switch (resultado.codigo) {
                case 1:
                    alertBoxMessage.innerHTML = resultado.motivo
                    alertBox.classList.add("alerta-error");
                    alertBox.style.top = 0
                    nombreInput.value = ""

                    setTimeout(() => {
                        alertBox.classList.add("hide-alertBox");
                    }, 3000);

                    break;
                case 2:
                    alertBoxMessage.innerHTML = resultado.motivo
                    alertBox.classList.add("alerta-error");
                    alertBox.style.top = 0
                    apellidosInput.value = ""

                    setTimeout(() => {
                        alertBox.classList.add("hide-alertBox");
                    }, 3000);

                    break;
                case 3:
                    alertBoxMessage.innerHTML = resultado.motivo
                    alertBox.classList.add("alerta-error");
                    alertBox.style.top = 0
                    passInput.value = ""

                    setTimeout(() => {
                        alertBox.classList.add("hide-alertBox");
                    }, 3000);

                    break;
            }
            
        }
        if (resultados.length == 0) {
                alertBoxMessage.innerHTML = "Información Correcta!";
                alertBox.classList.add("alerta-ok");
                alertBox.style.top = 0;
                setTimeout(() => {
                    alertBox.classList.add("hide-alertBox");
            }, 4000);
        }
        console.log(resultados)
    })
    
})