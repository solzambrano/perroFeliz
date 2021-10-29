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
let usuarios=[];
    /**declaracion de variables y clases */
class Usuario{
    constructor(nombre,apellido,edad,calle,numero,barrio, user, email,pass){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.calle=calle;
        this.numero=numero;
        this.barrio=barrio;
        this.usuario={
            user:user,
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
        user:{
            pattern:/^[a-zA-Z0-9\_\-]{4,15}$/,
            mensaje:"la longitud debe ser entre 4 y 15 caracteres"
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
    let user =document.getElementById("user");
    let password =document.getElementById("password");
    let botonSig=document.getElementById("botonSig");
    let enviar =document.getElementById("enviar")
    /**probar con otra manera llamando al input me ahorro lineas pero tendria que poner las secciones debajo de cada input*/
    //let input=document.querySelectorAll("input").addEventListener("blur",validate)

/**value */
nombre.addEventListener("blur",()=>validatePerson(0,nombre,expresiones.string))
apellido.addEventListener("blur",()=>validatePerson(1,apellido,expresiones.string))
telefono.addEventListener("blur",()=>validatePerson(2,telefono,expresiones.number))
calle.addEventListener("blur",()=>validatePerson(3,calle,expresiones.string))
numero.addEventListener("blur",()=>validatePerson(4,numero,expresiones.number))
barrio.addEventListener("blur",()=>validatePerson(5,barrio,expresiones.string))
email.addEventListener("blur",()=>validatePerson(6,email,expresiones.correo))
user.addEventListener("blur",()=>validatePerson(7,user,expresiones.user))
password.addEventListener("blur",()=>validatePerson(7,password,expresiones.pass))
let result=botonSig.addEventListener("click",()=>validateFirstStep(validateErrores()))
enviar.addEventListener("submit",()=>validateData(validateFirstStep(validateErrores()),result))

/**funciones */
validateErrores=(errores,expresion)=>{
    let input=document.getElementsByTagName("input");
    if(errores && errores.length !==0){
        errores.forEach(error=>{
          input[error].style.borderColor="red"
          let etiqueta=document.createElement("div")
          etiqueta.innerhtml=`
                <div class="alert alert-danger" role="alert">
                ${expresion.mensaje}
                </div>`     
          input[error].appendChild(etiqueta)
        })
    }
    else{
        return false
    }
}
validatePerson = (i,campo,expresion)=>{
    let errores=[]
        if(campo.value.length=0 || !expresion.pattern.test(campo.value)){
            errores.push(i)
        }
    validateErrores(errores,expresion) 
}
validateFirstStep=(error)=>{
    if(!error){
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
}
validateData=(e,error,person)=>{
    console.log(e)
    e.preventDefault()
    if(!error){
        console.log(usuarios)
        usuarios.push(new Usuario(person,user.value,email.value,pass.value))
    }
}
console.log(usuarios)
