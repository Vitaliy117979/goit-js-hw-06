const decrement = document.querySelector('[data-action="decrement"]')
const increment = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')


let i = 0



function onPlus (){
   i += 1
     value.textContent = i
}

function onMinus (){
  i -= 1
  value.textContent = i
    
}


decrement.addEventListener('click', onMinus)
increment.addEventListener('click', onPlus)

  console.log(value.textContent)