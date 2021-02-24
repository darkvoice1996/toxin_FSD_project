let burger = document.querySelector('.burger-button')
let burgerIcon = burger.querySelector('.burger-button__icon')

burgerIcon.addEventListener('click', function () {
    let burgerContent = burger.querySelector('.burger-button__content')

    burgerIcon.classList.toggle('burger-button__icon_active')
    burgerContent.classList.toggle('burger-button__content_shown')
})

document.addEventListener('click', function (event) {
    if (!burger.contains(event.target)) {
        let burgerContent = burger.querySelector('.burger-button__content')

        burgerIcon.classList.remove('burger-button__icon_active')
        burgerContent.classList.remove('burger-button__content_shown')
    }
})



