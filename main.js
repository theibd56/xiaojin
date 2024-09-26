import './sass/form.scss'

const form = document.querySelector('.feedback-form'),
    formButton = document.querySelector('.feedback-form__button'),
    formClose = document.querySelector('.feedback-form__close');


formButton.addEventListener('click', toggleHandler)
formClose.addEventListener('click', toggleHandler)

function toggleHandler(e) {
    e.preventDefault()
    form.classList.toggle('success')
}


document.querySelector('#feedbackPhone').onkeydown = function(e){
    inputphone(e,document.querySelector('#feedbackPhone'))
}
function inputphone(e, phone){
    function stop(event) {
        event.preventDefault();
    }
    let key = e.key, v = phone.value, not = key.replace(/([0-9])/, 1)

    if(not == 1 || 'Backspace' === not){
        if('Backspace' != not){
            if(v.length < 4 || v ===''){phone.value= '+7 ('}
            if(v.length === 7){phone.value= v +') '}
            if(v.length === 11){phone.value= v +'-'}
            if(v.length === 14){phone.value= v +'-'}
        }
    }
    else {
        stop(e)
    }
}