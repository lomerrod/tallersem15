
document.getElementById('showPersonajesList').addEventListener('click', function (e) {
  e.preventDefault();
  const listGroup = document.getElementById('personajesList');
  
  // Verificar si el listGroup tiene la clase 'd-none'
  if (listGroup.classList.contains('d-none')) {
      listGroup.classList.remove('d-none');
      listGroup.classList.add('d-block');
  } else {
      listGroup.classList.remove('d-block');
      listGroup.classList.add('d-none');
  }
});