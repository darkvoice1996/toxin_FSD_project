let dropdown = document.querySelectorAll('.navbar__dropdown')

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function () {
        let dropdownContent = dropdown[i].querySelector('.navbar__dropdown-content')
        dropdownContent.classList.toggle('navbar__dropdown-content_shown')
    })

    document.addEventListener('click', function (event) {
        let openDropdown = dropdown[i]
        if (!openDropdown.contains(event.target)) {
            let dropdownContent = dropdown[i].querySelector('.navbar__dropdown-content')
            dropdownContent.classList.remove('navbar__dropdown-content_shown')
        }
    })
}

