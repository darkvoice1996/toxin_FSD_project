let counters = document.querySelectorAll('.dropdown-counter__counter')

for (let i = 0; i < counters.length; i++) {
    let counter = counters[i]

    let minus = counter.querySelector('.dropdown-counter__minus')
    let plus = counter.querySelector('.dropdown-counter__plus')
    let value = counter.querySelector('.dropdown-counter__value')

    minus.addEventListener('click', function () {
        let prevValue = +value.innerHTML

        if (prevValue > 0) {
            prevValue -= 1
            value.innerHTML = prevValue

            if (+value.innerHTML === 0) {
                minus.classList.add('dropdown-counter__button_blocked')
            }
        }
    })

    plus.addEventListener('click', function () {
        let prevValue = +value.innerHTML
        prevValue += 1
        value.innerHTML = prevValue

        if (+value.innerHTML === 1) {
            minus.classList.remove('dropdown-counter__button_blocked')
        }
    })


}

