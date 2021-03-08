import 'air-datepicker/dist/js/datepicker'

$('.datepicker-here').datepicker({
    language: {
        dateFormat: "d M",

        monthsShort: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', +
            'июль', 'авг', 'сент', 'окт', 'нояб', 'дек']
    },

    daysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],

    navTitles: {
        days: 'MM yyyy',
    },

    clearButton: true,
    confirmButton: true,

    minDate: new Date(),

    // inline: true, // Раскрывать или зафиксировать
    prevHtml: '<i class="material-icons">arrow_back</i>',
    nextHtml: '<i class="material-icons">arrow_forward</i>'
})

let buttonsContainer = document.querySelectorAll('.datepicker--buttons')

for (let i = 0; i < buttonsContainer.length; i++) {
    createSubmitButton(buttonsContainer[i])
}

let buttons = document.querySelectorAll('.datepicker--button')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('btn', 'btn_minimal')
}

function createSubmitButton (node) {
    let btn = document.createElement('span')
    btn.classList.add('datepicker--button')
    btn.innerText = 'Применить'
    node.appendChild(btn)
}

