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
cerrar=document.getElementById("cerrar");
registro=document.getElementById("registro");
modal=document.getElementById("modalBienvenido")
let etiqueta=document.createElement("p")


cerrar.addEventListener("click",()=>usuarioCreado());
usuarioCreado=()=>{
    if(localStorage.user!==null){
        let store=JSON.parse(localStorage.getItem("user"))
        console.log("si entre",store.storageUser[1].user);
        let mensaje=document.createTextNode(`Bienvenido:${store.storageUser[1].user}`)
        etiqueta.appendChild(mensaje);
        modal.appendChild(etiqueta)
    }
}


  