let dropdowns = document.querySelectorAll('.dropdown')

for (let i = 0; i < dropdowns.length; i++) {
    let input = dropdowns[i].querySelector('.dropdown__input')
    let content = dropdowns[i].querySelector('.dropdown__content')

    toggleContent(input, content)


    content.addEventListener('click', function (event) {

        if (dropdowns[i].classList.contains('dropdown__rooms')) showRooms(input)
        if (dropdowns[i].classList.contains('dropdown__guests')) showGuestsNumber(input)


    })

    function showRooms(input) {
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

    function showGuestsNumber(input) {
        let values = dropdowns[i].querySelectorAll('.dropdown-counter__value')

        let number = 0
        let words = ['гость', 'гостя', 'гостей']

        for (let i = 0; i < values.length; i++) {
            let num = +values[i].innerText
            number += num
        }

        input.value = number + ' ' + detectDeclination(number, words)

        function detectDeclination(number, text_forms) {
            return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
        }
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

