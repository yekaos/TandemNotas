const div = document.createElement('div')
div.className = 'nota'
div.contentEditable = true
const texto = document.createTextNode('Edita la nota')
div.appendChild(texto)
const root = document.getElementById('root')
root.appendChild(div)
const btnAgregar = document.createElement('button')
const textBtnAgregar = document.createTextNode('Agrega una nota')
btnAgregar.appendChild(textBtnAgregar)
root.appendChild(btnAgregar)

document.addEventListener('DOMContentLoaded',function(){
    showInfo();
})

document.getElementById('btn-add-nota').addEventListener('click', function(){
    getInfo(nota)
    setLocalInfo(nota)
    showInfo()
    
})
document.getElementById('btn-clean-notas').addEventListener('click', function(){
    cleanInfo()
    showInfo()

})

// recoger la información 
function getInfo(){
    // capturamos lo que el usuario introduce
    let nota = document.getElementById('nota').innerHTML
    console.log(nota)
    return nota
    
}
// alamacenarla en localStorage
function setLocalInfo(nota){
    // guardaría la info en localStorage
    const clave = Date.now();
  localStorage.setItem(clave,getInfo(nota))
   
}

// leerla y sacarla por pantalla
function showInfo(){
    // leerla y mostrarla por pantalla
    //  sino hay notas mostra no hay nada
    // limpiamos la pantalla
    document.getElementById('show-notas').innerHTML= ''
    for (let index = 0; index < localStorage.length; index++) {
        let clave = localStorage.key(index)
        let valor = localStorage[clave]
        console.log(valor)  
        let elemento = `
        <div class='lista-notas'>
        ${valor}
        </div>
        `
        document.getElementById('show-notas').innerHTML+= elemento

    }

    
}

// limpiarla

function cleanInfo(){
    // limpiar el local storage y limpiar la pantaal
    // Elimina todos los elementos
localStorage.clear();
    console.log('En localstorage no hay notas')
}