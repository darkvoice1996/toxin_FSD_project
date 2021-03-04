let maskedInputs = document.querySelectorAll('.input_masked')

for (let i = 0; i < maskedInputs.length; i++) {
    maskBirthDay(maskedInputs[i])
}

function maskBirthDay(input) {
    let mask = /[0-3][0-9]\.[0-1][0-9]\.[1-2][09][0-9][0-9]/

    input.addEventListener('input', function (event) {
        checkOnRegExp(/[0-9]/)
        // console.log(input.value.length)
        // input.blur()

        if (input.value.length === 8) {
            input.value = setDots(input.value)
            input.blur()
        }
    })

    function checkOnRegExp(regExp) {
        if (!(regExp.test(event.data))) {
            input.value = input.value.slice(0, -1)
        }
    }

    function setDots(value) {
        return value.slice(0, 2) + '.' + value.slice(2, 4) + '.' + value.slice(4)
    }
}
