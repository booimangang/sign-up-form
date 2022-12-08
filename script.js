
// pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 

const firstNameInput = document.querySelector(`[name="first-name"]`);
const passwordInput = document.querySelector(`#password`);
const showPasswordToggleBtn = document.querySelector(".show-password-toggle-tbn")

firstNameInput.addEventListener("invalid", () => {
    if (firstNameInput.validity.tooShort) {
        console.log("First name too short")
    }
    // firstNameInput.setCustomValidity("bdhjffb")
})

const error = document.querySelector("#mail + span.error")


// passwordInput.addEventListener("input", () => {
//     console.log("input password")
// })

showPasswordToggleBtn.addEventListener("click", (e) => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        showPasswordToggleBtn.textContent = "hide password"
    } else {
        passwordInput.type = "password";
        showPasswordToggleBtn.textContent = "show password"

    }
})

