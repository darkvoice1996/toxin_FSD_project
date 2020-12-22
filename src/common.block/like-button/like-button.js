window.likePost = function () {
    let addClassActive = function (className) {
        return document.getElementsByClassName(className)[0].classList.toggle(className + '_active')
    }

    let changeIcon = function () {
        let likeIcon = document.getElementsByClassName("like-button__icon")[0];
        if (likeIcon.innerHTML === 'favorite_border') {
            likeIcon.innerHTML = "favorite"
        } else {
            likeIcon.innerHTML = 'favorite_border'
        }
    }

    addClassActive('like-button')
    addClassActive('like-button__icon')
    changeIcon()
    addClassActive('like-button__counter')

}
