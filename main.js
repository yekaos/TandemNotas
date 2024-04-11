// capturamos los id necesarios del DOM
const nota= document.getElementById('nota')
const date= document.getElementById('date')
const showNotas= document.getElementById('display-notas')
const btnAddNota= document.getElementById('btn-add-nota')
const cleanNotas= document.getElementById('clean-notas')
const displayNotas= document.getElementById('display-notas')
// agregamos interactividad a los botones
btnAddNota.addEventListener('click',function (){
  agregarNota();
  mostrarNotas();
} )
cleanNotas.addEventListener('click', borrarNotas )


function agregarNota(){
  let clave = date.value
  let valor= nota.textContent
  localStorage.setItem(clave, valor)
  console.log(clave)
  console.log(valor)


}
function mostrarNotas(){
  for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i) // Clave donde esta guardada la info del Est.
    let valor = localStorage.getItem(clave) // Info del Est. en formato JSON
    if(localStorage.length>0){
      displayNotas.innerHTML+=`
      <div class='nota'>
         <small>${clave}</small>
         <span class='nota'>${valor}</span>
      </div>
      `

    }else{
      displayNotas.innerHTML=`
    <div class='nota'>
       <span class='nonota'>No tienes notas guardadas</span>
    </div>
    `

    }
    
  }

}
function borrarNotas(){
  localStorage.clear();
  displayNotas.innerHTML=`
  <div class='nota'>
     <span>No tienes notas guardadas</span>
  </div>
  `
}

// //Api de localStorage
// localStorage.setItem('tarea02','fiesta loca')
// let tarea= localStorage.getItem('tarea02')
// console.log(tarea)
// console.log(localStorage.length)


// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i) // Clave donde esta guardada la info del Est.
//     console.log(key)
//     tarea = localStorage.getItem(key) // Info del Est. en formato JSON
//     console.log(tarea)
//   }
  //localStorage.clear();
