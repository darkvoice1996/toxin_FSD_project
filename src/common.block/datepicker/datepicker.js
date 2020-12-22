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

    minDate: new Date(),

    // inline: true, // Раскрывать или зафиксировать
    prevHtml: '<i class="material-icons">arrow_back</i>',
    nextHtml: '<i class="material-icons">arrow_forward</i>'
})
