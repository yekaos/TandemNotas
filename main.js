//Api de localStorage
localStorage.setItem('tarea02','fiesta loca')
let tarea= localStorage.getItem('tarea02')
console.log(tarea)
console.log(localStorage.length)


for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i) // Clave donde esta guardada la info del Est.
    console.log(key)
    tarea = localStorage.getItem(key) // Info del Est. en formato JSON
    console.log(tarea)
  }
  //localStorage.clear();
