$(function(){
    $("#pasoDos").hide()
    $("#pasoTres").hide()
})
$("#botonUno").click(function(){
    $("#pasoUno").hide()
    $("#pasoDos").show()
    $("#pasoTres").hide()
})
$("#botonDos").click(function(){
    $("#pasoUno").hide()
    $("#pasoDos").hide()
    $("#pasoTres").show()
    })
class Usuario{
    constructor(nombre,apellido,edad,direccion,nombreMascota, especie,edadMascota, user, pass){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.direccion=direccion;
        this.mascota={
            "nombreMascota":nombreMascota,
            "especie":especie,
            "edadMascota":edadMascota
        };
        this.usuario={
            "user":user,
            "pass":pass
        }
    }
}
// let muestra= new Usuario("jose","nose",5,"nose","cocki","perro","1","pet","ooool")
// console.log(muestra)