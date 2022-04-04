let menu = document.querySelector('#menubtn')
let header = document.querySelector('.header')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')

}

let theme = document.querySelector('#themetoggle')


theme.onclick = () => {
    theme.classList.toggle('fa-sun')
    if(theme.classList.contains('fa-sun')){
        document.body.classList.add('active')


    } else{
        document.body.classList.remove('active')
    }
}