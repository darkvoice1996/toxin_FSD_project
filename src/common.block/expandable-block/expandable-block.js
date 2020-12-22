window.expandBlock = function () {
    let blockContent = document.getElementsByClassName('expandable-block__content')
    let blockArrow = document.getElementsByClassName('expandable-block__icon')

    blockContent[0].classList.toggle('expandable-block__content_open')
    blockArrow[0].classList.toggle('expandable-block__icon_open')
}