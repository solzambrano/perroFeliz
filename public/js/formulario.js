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
let storageUser=[];
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
let posicionError=[];


let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let telefono=document.getElementById("mob");
let calle=document.getElementById("calle");
let numero=document.getElementById("numero")
let barrio=document.getElementById("barrio")
let email =document.getElementById("email");
let password =document.getElementById("password");
let botonSig=document.getElementById("botonSig");
let enviar =document.getElementById("enviar");

/**value */
nombre.addEventListener("blur",()=>validatePerson(0,nombre,expresiones.string));
apellido.addEventListener("blur",()=>validatePerson(1,apellido,expresiones.string));
telefono.addEventListener("blur",()=>validatePerson(2,telefono,expresiones.number));
calle.addEventListener("blur",()=>validatePerson(3,calle,expresiones.string));
numero.addEventListener("blur",()=>validatePerson(4,numero,expresiones.number));
barrio.addEventListener("blur",()=>validatePerson(5,barrio,expresiones.string));
email.addEventListener("blur",()=>validatePerson(6,email,expresiones.correo));
password.addEventListener("blur",()=>validatePerson(7,password,expresiones.pass));
botonSig.addEventListener("click",()=>validateFirstStep());


/**funciones */
/**pinta los campos con rojo si hay error en alguno de ellos */
validateErrores=(errores,expresion,i)=>{
    let div=document.getElementsByClassName("form-group");
    let input=document.getElementsByTagName("input");
    let etiqueta=document.createElement("p");
    let content=document.createTextNode(expresion.mensaje);
    etiqueta.setAttribute("id","etiqueta");
    let idEtiqueta=document.getElementById("etiqueta")
        if(errores && errores.length !==0){
            if(!errores.indexOf(i)){
            errores.forEach(error=>{
            var nameClass=div[error].className;
            input[error].style.borderColor="red";
            crearMensaje(error,etiqueta,content,nameClass);
            document.getElementById("botonSig").style.visibility = "hidden";
         })
            }
        }else{
            document.getElementById("botonSig").style.visibility = "visible"
            borrarMensaje(div,i,idEtiqueta,div[i].className);
        }
}
/**esta funcion crea el mensaje de error */
crearMensaje=(error,etiqueta,content,nameClass)=>{
             etiqueta.appendChild(content);
             setTimeout(function(){
            (document.getElementsByClassName(nameClass)[error].appendChild(etiqueta)).fadeIn(1000);
             },500)
}
/**si no hay error esta funcion borra la etiqueta */
borrarMensaje=(div,error,idEtiqueta,nameClass)=>{
    console.log(div[error])
              setTimeout(function(){
             (document.getElementsByClassName(nameClass)[error].removeChild(idEtiqueta)).fadeOut(1000);
              },500);
}

/**valida cada campo indivudal si hay un error va a la funcion validateErrores */
validatePerson = (i,campo,expresion)=>{
    let errores=[]
    if(campo.value.length=0 || !expresion.pattern.test(campo.value)){
        posicionError.push(i)

    }else{
        campo.style.borderColor="blue"
         posicionError=posicionError.filter(function(item){return item!==i})
    }
    validateErrores(posicionError,expresion,i) 
}

validateFirstStep=()=>{
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
mostrarMensaje=()=>{
    let exito="";
    exito+=`<div class="alert alert-success" role="alert">
    Se ha creado la cuenta con exito
  </div>`
    enviar.innerHTML=exito
}
enviar.addEventListener("submit",(e)=>{
    e.preventDefault()
    let result =validateFirstStep()
    console.log(result)
    if(result){
        let storage=localStorage.user
        if(storage !==null){
            storageUser=[storage]
        }
        storageUser.push({ user:email.value,
            pass:password.value})
        localStorage.setItem("user",JSON.stringify({storageUser}))
        console.log(localStorage.getItem("user"))
        usuarios.push(new Usuario(person,email.value,password.value))
        mostrarMensaje()
    }
});



