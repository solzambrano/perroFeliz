$(function(){ /** me falto unificar los nombres para no tener spanglish */
    $("#pasoUno").show()
    $("#pasoDos").hide()
    $("#atras").hide()
})
$("#botonSig").click(function(){
    $("#pasoUno").hide()
    $("#pasoDos").show()
    $("#atras").show()
})
$("#atras").click(function(){
    $("#pasoUno").show()
    $("#pasoDos").hide()

})

let usuarios=[];
let storage=[];
    /**declaracion de variables y clases */
class Usuario{
    constructor(nombre,apellido,telefono,calle,numero,barrio, email,pass){
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
        this.calle=calle;
        this.numero=numero;
        this.barrio=barrio;
        this.usuario={
            email:email,
            pass:pass
        }
    }
}
//** primero creo el usuario y despues registro las mascotas */
/**si tiene mas de una mascota que se creen tantos input como mascotas tenga */
const expresiones={
        string:{
            pattern:/^[a-zA-Z\s]{2,15}$/,
            mensaje:"El campo no debe contener numeros",
        },
        pass:{
            pattern:/^.{4,8}$/,
            mensaje:"el campo debe tener entre 4 y 8 caracteres"
        },
        correo:{
            pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            mensaje:"lo que ha ingresado no tiene formato de correo"
        },
        number:{
            pattern:/^[0-9]{4,10}/,
            mensaje:"el numero de telefono deberia contener 10 numeros"
        }
    }


    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    let telefono=document.getElementById("mob");
    let calle=document.getElementById("calle");
    let numero=document.getElementById("numero")
    let barrio=document.getElementById("barrio")
    let email =document.getElementById("email");
    let password =document.getElementById("password");
    let botonSig=document.getElementById("botonSig");
    let enviar =document.getElementById("enviar")

/**value */
nombre.addEventListener("blur",()=>validatePerson(0,nombre,expresiones.string))
apellido.addEventListener("blur",()=>validatePerson(1,apellido,expresiones.string))
telefono.addEventListener("blur",()=>validatePerson(2,telefono,expresiones.number))
calle.addEventListener("blur",()=>validatePerson(3,calle,expresiones.string))
numero.addEventListener("blur",()=>validatePerson(4,numero,expresiones.number))
barrio.addEventListener("blur",()=>validatePerson(5,barrio,expresiones.string))
email.addEventListener("blur",()=>validatePerson(6,email,expresiones.correo))
password.addEventListener("blur",()=>validatePerson(7,password,expresiones.pass))
botonSig.addEventListener("click",()=>validateFirstStep(validateErrores()))


/**funciones */
/**pinta los campos con rojo si hay error en alguno de ellos */
validateErrores=(errores,expresion)=>{
    let input=document.getElementsByTagName("input");
    if(errores && errores.length !==0){
        errores.forEach(error=>{
            input[error].style.borderColor="red"
            let etiqueta=document.createElement("div")
            etiqueta.innerhtml=`
            <div class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            ${expresion.mensaje}
            </div>`      
            input[error].appendChild(etiqueta)
        })
    }
    else{
        return "no_error"
    }
}
/**valida cada campo indivudal si hay un error va a la funcion validateErrores */
validatePerson = (i,campo,expresion)=>{
    let errores=[]
    if(campo.value.length=0 || !expresion.pattern.test(campo.value)){
        errores.push(i)
    }else{
        campo.style.borderColor="blue"
    }
    validateErrores(errores,expresion) 
}
validateFirstStep=(error)=>{
    if(error=="no_error"){
        person={
            nombre: nombre.value,
            apellido:apellido.value,
            telefono:telefono.value,
            calle:calle.value,
            numero:numero.value,
            barrio:barrio.value 
        }
        return person
    }
    else return false
}
mostrarMensaje=()=>{
    let exito="";
    exito+=`<div class="alert alert-success" role="alert">
    Se ha creado la cuenta con exito
  </div>`
    enviar.innerHTML=exito
}
enviar.addEventListener("submit",(e)=>{
    e.preventDefault()
    let result =validateFirstStep(validateErrores())
    console.log(result)
    if(result){
        storage.push({ user:email.value,
            pass:password.value})
        localStorage.setItem("user",JSON.stringify({storage}))
        console.log(localStorage.getItem("user"))
        usuarios.push(new Usuario(person,email.value,password.value))
        mostrarMensaje()
    }
})

