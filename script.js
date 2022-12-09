const form = document.getElementById('form');
const firstNameInput = document.querySelector(`[name="first-name"]`);
const email = document.querySelector("#email")
const passwordInput = document.querySelector(`#password`);
const confirmPasswordInput = document.querySelector(`#confirm-password`);
const showPasswordToggleBtn = document.querySelector(".show-password-toggle-tbn")
const submitBtn = document.querySelector(".submit-btn")

const firstNameErrorWarning = document.querySelector(".first-name-warning")
const emailErrorWarning = document.querySelector(".email-warning")
const passwordErrorWarning = document.querySelector(".invalid-password-warning")
const unmatchPasswordWarning = document.querySelector(".unmatch-password-warning")


firstNameInput.addEventListener("input", () => {
    if (firstNameInput.validity.valid) { firstNameErrorWarning.textContent = "" }
    else { showFirstNameError() }
})

function showFirstNameError() {
    if (firstNameInput.validity.valueMissing) {
        firstNameErrorWarning.textContent = "you need to enter your first-name"
    } else if (firstNameInput.validity.tooShort) {
        firstNameErrorWarning.textContent = "name must be at least 4 characters"
    }
}

email.addEventListener("input", () => {
    if (email.validity.valid) { emailErrorWarning.textContent = "" }
    else { showEmailError() }
})

function showEmailError() {
    if (email.validity.valueMissing) emailErrorWarning.textContent = "you must enter your email"
    else if (email.validity.typeMismatch) emailErrorWarning.textContent = "entered value must be an e-mail address"
}







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

    if (!firstNameInput.validity.valid) {
        showFirstNameError();
        console.log("submiting fail at first-name invalid");
        e.preventDefault();
    }

    if (!email.validity.valid) {
        showEmailError();
        console.log("submiting fail at email invalid");
        e.preventDefault();
    }

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
