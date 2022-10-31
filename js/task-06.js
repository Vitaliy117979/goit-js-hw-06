const refs = document.querySelector("#validation-input")


function onNiceVeryfi(e) {
  if(e.currentTarget.value.length === Number(refs.dataset.length)){
        refs.classList.remove('invalid')
        refs.classList.add('valid')

    }
    else{
        refs.classList.add('invalid')
        refs.classList.remove('valid')
        
    }
}

refs.addEventListener('blur', onNiceVeryfi)