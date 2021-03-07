let dropdowns = document.querySelectorAll('.dropdown')
addDropdownFunc(dropdowns)

let clearButtons = document.querySelectorAll('.dropdown-counter__clear-button')
addClearFunc(clearButtons)

let submitButtons = document.querySelectorAll('.dropdown-counter__submit-button')
addSubmitFunc(submitButtons)

function showRooms(input, dropdown) {
    let titles = dropdown.querySelectorAll('.dropdown-counter__title')
    let values = dropdown.querySelectorAll('.dropdown-counter__value')

    let result = ''

    for (let i = 0; i < titles.length && i < values.length; i++) {
        if (!(values[i].innerText === '0')) {
            if (result !== '') result += ', '
            result += titles[i].innerText.toLowerCase() + ': ' + values[i].innerText
        }
    }

    input.value = result.slice(0, 28)

    if (input.value.length === 28) {
        input.value += '...'
    }
}

function showGuestsNumber(input, dropdown) {

    let number = countGuests(dropdown)
    let words = ['гость', 'гостя', 'гостей']

    if (number === 0) {
        input.value = ''
    } else {
        input.value = number + ' ' + detectDeclination(number, words)

    }

    function detectDeclination(number, text_forms) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
}

function countGuests(dropdown) {
    let values = dropdown.querySelectorAll('.dropdown-counter__value')
    let number = 0

    for (let i = 0; i < values.length; i++) {
        let num = +values[i].innerText
        number += num
    }

    return number
}

function addClearFunc(buttons) {
    for (let i = 0; i < clearButtons.length; i++) {
        clearButtons[i].addEventListener('click', function () {
            let dropdownsGuests = document.querySelectorAll('.dropdown__guests')

            for (let i = 0; i < dropdownsGuests.length; i++) {
                let values = dropdownsGuests[i].querySelectorAll('.dropdown-counter__value')
                for (let i = 0; i < values.length; i++) {
                    values[i].innerText = '0'
                }
            }
        })
    }
}

function addSubmitFunc(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            let target = event.target.closest('.dropdown__content')
            target.classList.toggle('dropdown__content_hidden')
        })
    }
}

function addDropdownFunc(dropdowns) {
    for (let i = 0; i < dropdowns.length; i++) {
        let input = dropdowns[i].querySelector('.dropdown__input')
        let content = dropdowns[i].querySelector('.dropdown__content')

        toggleContent(input, content)

        content.addEventListener('click', function (event) {
            if (dropdowns[i].classList.contains('dropdown__rooms')) {
                showRooms(input, dropdowns[i])
            }

            if (dropdowns[i].classList.contains('dropdown__guests')) {
                showGuestsNumber(input, dropdowns[i])

                // hiding clear button, when values is 0
                let clearBtn = dropdowns[i].querySelector('.dropdown-counter__clear-button')

                if (countGuests(dropdowns[i]) > 0) {
                    let clearBtn = dropdowns[i].querySelector('.dropdown-counter__clear-button')
                    clearBtn.classList.remove('dropdown-counter__controls_hidden')
                }
                if (countGuests(dropdowns[i]) === 0) {
                    let clearBtn = dropdowns[i].querySelector('.dropdown-counter__clear-button')
                    clearBtn.classList.add('dropdown-counter__controls_hidden')
                }
            }
        })

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
}
