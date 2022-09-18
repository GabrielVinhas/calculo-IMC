// Variáveis
const form = document.querySelector('form')
const weightInput = document.querySelector('#kg')
const heightInput = document.querySelector('#cm')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal h2')
const modalBtnClose = document.querySelector('.modal button')

const alertError = {
  element: document.querySelector('.alert'),
  open() {
    alertError.element.classList.add('open')
  },
  close() {
    alertError.element.classList.remove('open')
  }
}
weightInput.oninput = () => alertError.close()
heightInput.oninput = () => alertError.close()

function IMC(weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
}

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = weightInput.value
  const height = heightInput.value

  if(notNumber(weight) || notNumber(height)) {
    alertError.open()
    return;
  }

  alertError.close()
  
  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modalMessage.innerText = message

  modalWrapper.classList.add('open')
}

modalBtnClose.onclick = () => {
  modalWrapper.classList.remove('open')
  weightInput.value = ""
  heightInput.value = ""
}

window.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    modalWrapper.classList.remove('open')
  }
})

function notNumber(value) {
  return isNaN(value) || value == ''
}

