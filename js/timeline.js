const frameworks = [
    {
        name:"2 años", 
        description:"•  Di mis primeros pasos.",
        description2:"• Aprendí a hablar."
    },
    {
        name:"4 años", 
        description:"•  Entré a estudiar en PC-Cito, ubicado en Aguilar Batres.",
        description2:"• Me regalaron mi primera consola de videojuegos, la Nintendo WII."
    },
    {
        name:"7 años", 
        description:"•  Me mudé de mi hogar ubicado en El Mezquital, fui a vivir a Planes de Bárcenas.",
        description2:"• Me cambiaron de colegio a PC-Cito, ubicado en Villa Nueva."
    },
    {
        name:"10 años", 
        description:"•  Salí del país por primera vez, viajé a El Salvador.",
        description2:"• Conocí a mi primer mejor amigo, llamado Victor Esquivel."
    },
    {
        name:"12 años", 
        description:"•  Participé y gané en mi primera competencia de inglés.",
        description2:"• Me rompí la pierna por saltar entre rocas."
    },
    {
        name:"14 años", 
        description:"•  Comencé a trabajar por primera vez.",
        description2:"• Me gradué de secundaria."
    },
    {
        name:"16 años", 
        description:"•  Me dio COVID",
        description2:"• Estoy culminando mi carrera."
    }
]

// render html
var html = "";
frameworks.forEach(e=>{
    html +="<div class='child'><div class='content' style='text-align: justify;'><h4 style='font-style: italic; font-size: 35px;'>"+e.name+"</h4><p style='font-size: 23px;'>"+e.description+"</p><p style='font-size: 23px;'>"+e.description2+"</p></div> </div>"
})
timeline.innerHTML = html

// ANIMACION TIMELINE

var _items = document.querySelectorAll(".child")
_items.forEach(element =>{
    if(element.offsetTop < 300)
        element.classList.add('_show')
})

window.addEventListener("scroll",e=>{
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEach(elem=>{
        if(elem.offsetTop - window.innerHeight/2 < scroll){
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        }else{
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }

    })
})

console.log("4 Marzo (2023) - 7:43 horas de codificación");
console.log("5 Marzo (2023) - 14:27 horas de codificación");
console.log("Casi 22.2 horas de programación, dedicadas a todos mis amigos que conocí estos 2 ultimos años, por los que están y los que no. Cambien el mundo, mi mensaje final...");
console.log("Adios los amo.");
console.log("-Steven ARZ-");

