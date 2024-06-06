//alerta
const alerta1 = document.getElementById('alerta')
const boton = document.getElementById('contenedor') 
alerta1.addEventListener('click' , function(){
  alert('esto es un simulacro!!');
})

//OffCanvas
const miventanaOffcanvas = document.getElementById('ventanaOffcanvas');
miventanaOffcanvas.addEventListener('click' , function(){

  document.getElementById('offcanvas-body').innerText = 'Este canvas llama a amar al señor todo poderoso efren';
  document.getElementsByClassName
})


//Popover
const miventanapopover = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...miventanapopover].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//toast
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
let toast = document.querySelectorAll('.toast')
if (toast) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toast.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

let liveToastBtn = document.getElementById('liveToastBtn');
liveToastBtn.addEventListener('click', function(){
  document.querySelector('.toast-body').textContent = liveToastBtn.getAttribute('data-content');
})