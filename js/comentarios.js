
/**esta seccion todavia no esta realizada **/
class Comentario{
    constructor(nombre, apellido, mensaje){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mensaje= mensaje;
        this.fechaPublicacion=newDate()
    }

}
let comentarios=[];
let comentar=document.getElementById("comentar").addEventListener("click",comentar);
/**al hacer click en un boton comentar deberia aparecerme los campos para escribir y una vez que los haya escrito 
 * que me aparezcan en la seccion de comentarios con un mensaje que diga su mensaje se ha publicado correctamente
 */
comentar=()=>{
let nombre= document.getElementById("nombre").value
let apellido= document.getElementById("apellido").value
let mensaje= document.getElementById("mensaje").value
comentarios.push(new Comentario(nombre,apellido,mensaje))
}