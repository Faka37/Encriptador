//Se trae a las etiquetas html atravez de clases
const entrada = document.querySelector(".entradaTexto")

const mensaje = document.querySelector(".mensaje")

//La funcion tiene una variable que es una lista para que atravez del for pueda verificar si incluye esa letra que la remplace por el valor de posicion 1 

const btnEncriptar = () => {

    //lo que se escriba a pasar a travez de la funcion encriptar
    const textoEncriptado = encriptar(entrada.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    esperando.style.display = "none"
    entrada.value = ""

}

const encriptar = (encriptandoString) => {
    let encriptador = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    encriptandoString = encriptandoString.toLowerCase()

    for( let i = 0; i < encriptador.length ; i++) {
        if(encriptandoString.includes(encriptador[i][0])) {
            encriptandoString = encriptandoString.replaceAll(encriptador[i][0], encriptador[i][1])
        }
    }
    return encriptandoString

}

const btnDesencriptar = () => {


    const textoDesencriptado = desencriptar(entrada.value)
    mensaje.value = textoDesencriptado
    mensaje.style.backgroundImage = "none"
    entrada.value = ""
}

const desencriptar = (desencriptandoString) => {
    let desencriptador = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    desencriptandoString = desencriptandoString.toLowerCase()

    for( let i = 0; i < desencriptador.length ; i++) {
        if(desencriptandoString.includes(desencriptador[i][1])) {
            desencriptandoString = desencriptandoString.replaceAll(desencriptador[i][1], desencriptador[i][0])
        }
    }
    return desencriptandoString

}


const btnCopiar = () => {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    alert("Texto copiado!!!")
    mensaje.value = "Inténtalo desencriptando..."

}




