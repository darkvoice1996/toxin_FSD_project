let dropdowns = document.querySelectorAll('.dropdown')

for (let i = 0; i < dropdowns.length; i++) {
    let input = dropdowns[i].querySelector('.dropdown__input')
    let content = dropdowns[i].querySelector('.dropdown__content')

    toggleContent(input, content)

    content.addEventListener('click', function (event) {
        pasteInputValue(input)
    })

    function pasteInputValue(input) {
        let titles = dropdowns[i].querySelectorAll('.dropdown-counter__title')
        let values = dropdowns[i].querySelectorAll('.dropdown-counter__value')

        let result = ''

        for (let i = 0; i < titles.length && i < values.length; i++) {
            if (!(values[i].innerText === '0')) {
                if (result !== '') result += ', '
                result += titles[i].innerText.toLowerCase() + ': ' + values[i].innerText
            }
        }

        input.value = result
    }
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

