const taskForm = document.querySelector('#taskForm');
const formAlert = document.querySelector('#formAlert');

function validFormFieldInput(data) {
  if (data.name.trim() === '') return false;
  if (data.description.trim() === '') return false;
  if (data.dueDate === '') return false;
  if (data.status === '') return false;
  return true;
}

taskForm.addEventListener('submit', function (event) {
  event.preventDefault(); // evita que la página se recargue

  const data = {
    name: document.querySelector('#newTaskNameInput').value,
    description: document.querySelector('#newTaskDescriptionInput').value,
    dueDate: document.querySelector('#newTaskDateInput').value,
    status: document.querySelector('#newTaskStatusSelect').value
  };

  console.log(data); // para comprobar que se leen bien los datos

  if (validFormFieldInput(data)) {
    formAlert.classList.add('d-none');     // datos válidos: ocultar alerta
  } else {
    formAlert.classList.remove('d-none');  // datos inválidos: mostrar alerta
  }
});