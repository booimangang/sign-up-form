const form = document.getElementById('form');
const firstNameInput = document.querySelector(`[name="first-name"]`);
const passwordInput = document.querySelector(`#password`);
const confirmPasswordInput = document.querySelector(`#confirm-password`);
const showPasswordToggleBtn = document.querySelector(".show-password-toggle-tbn")
const submitBtn = document.querySelector(".submit-btn")

const firstNameErrorWarning = document.querySelector(".first-name-warning")
const emailErrorWarning = document.querySelector(".email-warning")
const passwordErrorWarning = document.querySelector(".invalid-password-warning")
const unmatchPasswordWarning = document.querySelector(".unmatch-password-warning")

firstNameInput.addEventListener("invalid", () => {
    if (firstNameInput.validity.tooShort) {
        console.log("First name too short")
    }
    // firstNameInput.setCustomValidity("bdhjffb")
})

const error = document.querySelector("#mail + span.error")

showPasswordToggleBtn.addEventListener("click", showPasswordToggleHandler)

function showPasswordToggleHandler(e) {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
        showPasswordToggleBtn.textContent = "hide password";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
        showPasswordToggleBtn.textContent = "show password";
    }
}

form.addEventListener('submit', formSubmitHandler)

function formSubmitHandler(e) {
    let checkingPasswordFieldsCondition = checkPasswordFields(passwordInput.value, confirmPasswordInput.value)

    if (!checkingPasswordFieldsCondition) {
        e.preventDefault();
        unmatchPasswordWarning.textContent = "passwords do not match"
    }

    console.log("submitting")
}

function checkPasswordFields(password, confirmedPassword) {
    console.log(password == confirmedPassword)
    return password == confirmedPassword
}
