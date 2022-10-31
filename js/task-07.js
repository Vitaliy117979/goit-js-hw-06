const refs = {
    input: document.querySelector('input'),
    span: document.querySelector('span')

}

refs.span.classList.add('i')
refs.input.addEventListener('input', onInputChange)

function onInputChange (e){
    refs.span.style.fontSize = `${e.currentTarget.value}px`
}