let dropdowns = document.querySelectorAll('.dropdown')

for (let i = 0; i < dropdowns.length; i++) {
    let input = dropdowns[i].querySelector('.dropdown__input')
    let content = dropdowns[i].querySelector('.dropdown__content')

    toggleContent(input, content)

    function toggleContent(input, content) {
        input.onfocus = () => content.classList.remove('dropdown__content_hidden')

        document.addEventListener('click', function (event) {
            let target = event.target
            if (!(dropdowns[i].contains(target))) {
                content.classList.add('dropdown__content_hidden')
            }
        })
    }
}

