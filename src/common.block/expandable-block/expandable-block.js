let expandableBlocks = document.querySelectorAll('.expandable-block')

for (let i = 0; i < expandableBlocks.length; i++) {

    let header = expandableBlocks[i].querySelector('.expandable-block__header')
    let content = expandableBlocks[i].querySelector('.expandable-block__content')
    let icon = expandableBlocks[i].querySelector('.expandable-block__icon')

    header.addEventListener('click', function () {
        icon.classList.toggle('expandable-block__icon_open')

        content.classList.toggle('expandable-block__content_hidden')
    })

}