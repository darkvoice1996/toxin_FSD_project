// window.likePost = function () {
//     let addClassActive = function (className) {
//         return document.getElementsByClassName(className)[0].classList.toggle(className + '_active')
//     }
//
//     let changeIcon = function () {
//         let likeIcon = document.getElementsByClassName("like-button__icon")[0];
//         if (likeIcon.innerHTML === 'favorite_border') {
//             likeIcon.innerHTML = "favorite"
//         } else {
//             likeIcon.innerHTML = 'favorite_border'
//         }
//     }
//
//     addClassActive('like-button')
//     addClassActive('like-button__icon')
//     changeIcon()
//     addClassActive('like-button__counter')
//
// }

let likeButtons = document.querySelectorAll('.like-button')

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', function () {
        likeButtons[i].classList.toggle('like-button_active')

        changeIcon(likeButtons[i])
    })
}

function changeIcon(likeButtons) {
    let icon = likeButtons.querySelector('.like-button__icon')

    if (likeButtons.classList.contains('like-button_active')) {
        icon.innerText = 'favorite'
    } else {
        icon.innerText = 'favorite_border'
    }
}
