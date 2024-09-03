window.addEventListener("DOMContentLoaded", () => {

    const controls = document.querySelectorAll(".form__control")

    controls.forEach(formControl => {

        const label = formControl.firstElementChild
        const input = formControl.lastElementChild

        input.addEventListener('focus', () => {
            label.classList.remove("blur")
            label.classList.add("focus")
        })

        input.addEventListener("blur", () => {

            if (input.value.trim() == ""){
                label.classList.remove("focus")
                label.classList.add("blur")
            }

        })

    })

})