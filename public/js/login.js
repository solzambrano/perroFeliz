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
let form =document.getElementById("userCuenta").addEventListener("submit",()=>validate)

validate=(e)=>{
    e.preventDefault();
    let storage=JSON.parse.localStorage.getItem("user")
    
    let input =document.getElementsByTagNameNS("input")
    input.foEach(elemento =>{
console.log(input)

    })
}
console.log(usuarios)