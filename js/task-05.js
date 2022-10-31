  const  input = document.querySelector('#name-input')
  const  span = document.querySelector('#name-output')

const i = span.textContent
input.addEventListener('input', output)

function output (event ) {
  if(event.currentTarget.value){
      span.textContent = event.currentTarget.value
      return
  }
  span.textContent = i
}