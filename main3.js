// capturamos los id necesarios del DOM
const nota= document.getElementById('nota')
const showNotas= document.getElementById('show-notas')
const btnAddNota= document.getElementById('btn-add-nota')
const btnCleanNotas= document.getElementById('btn-clean-notas')
const displayNotas= document.getElementById('display-notas')

btnAddNota.addEventListener(`click`, function () {
    getInfo()
    setLocalInfo()
    showInfo()
})
btnCleanNotas.addEventListener(`click`, function () {
    cleanInfo()
    showInfo()

})
document.addEventListener("DOMContentLoaded", function () {
  
    showInfo()

})

// recoger la información 
function getInfo(){
    // devuelve el texto
    console.log('texto obtenido')
   
}


// alamacenarla en localStorage
function setLocalInfo(){
    // guardaría la info en localStorage
       console.log('texto se ha  grabado en localStorage')

}


// leerla y sacarla por pantalla
function showInfo(){
    // leerla y mostrarla por pantalla
    //  sino hay notas mostra no hay nada
     console.log('texto mostrado en display')
}

// limpiarla

function cleanInfo(){
    // limpiar el local storage y limpiar la pantaal
}