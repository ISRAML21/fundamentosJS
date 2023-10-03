const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.querySelector('#tareas ul');

const tareas = [];

function addTarea(){
    const dato = inputTarea.value;
    if(dato){
        tareas.push({tarea: dato, time: tiempo.value});
        inputTarea.value= '';
        showTareas();
    }
}

function showTareas(){
    const tareasLi = lista.map(tarea => `<li> ${tarea} - ${tarea.time}</li>`);
    listaTareas.innerHTML = tareasLi.join('');
}