//para el navbar de la pagina
$(function(){
    $("#quien .cartas").hide()
    $("#preguntas .cartas").hide()
    $("#comentarios .cartas").hide()
})
$("#boton1").click(function(){
    $("#quien .cartas").fadeIn()
    $("#preguntas .cartas").hide()
    $("#comentarios .cartas").hide()
})
$("#boton2").click(function(){
    $("#preguntas .cartas").fadeIn()
    $("#quien .cartas").hide()
    $("#comentarios .cartas").hide()
    })
 $("#boton3").click(function(){
        $("#comentarios .cartas").fadeIn()
        $("#quien .cartas").hide()
        $("#preguntas .cartas").hide()
    })
$('#myModal').on('shown.bs.modal', function () {
     $('#myInput').trigger('focus')
      })
/** segun en la seccion que estoy el boton debe pintrse para saber a que cartel corresponde */
let form =document.getElementById("userCuenta").addEventListener("click",()=>validate())
let user=document.getElementById("email")
let storage= JSON.parse(localStorage.user)
console.log(storage)
validate=(e)=>{
    console.log("hola")
    user.addEventListener("keyup",function(){
        let existe=storage.find(element=>element==user.value)
        console.log(existe)
        if(existe){
            user.value.innerHtml=existe
        }
    })
}