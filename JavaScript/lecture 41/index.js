
const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")
const errorMessage = document.querySelector("#error-message")



const LIMIT = 200

charCount.textContent = `${LIMIT} characters remaining`

function showEroor(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage
}

function clearEroor(input) {
    input.parentElement.querySelector(".error-message").textContent = ""

}


function validUsername(username) {
    console.log(username.parentElement.querySelector(".error-message"));
    if (username.value.trim().length === 0) {
        showEroor(username, "Please Enter your name")
        return false
    }

    if (username.value.trim().length < 3) {
        showEroor(username, "username  must be at least 3 character")
        return false
    }

    clearEroor(username)


    return true
}


function validPassword(password) {
    if (password.value.trim().length === 0) {
        showEroor(password, "Please Enter your password")
        return false
    }

    if (password.value.trim().length < 8) {
        showEroor(password, "password  must be at least 8 character")
        return false
    }

    clearEroor(password)


    return true
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const password = document.querySelector("#password").value

    const isUsernameValid = validUsername(username);
    const isPasswordValid = validPassword(password);



    if (isUsernameValid && isPasswordValid) {
        document.querySelector("h1").classList.remove("hidden")
    } else {
        document.querySelector("h1").classList.add("hidden")

    }
})



// bio.addEventListener("input", (e) => {
//     const remaining = LIMIT - bio.value.length;
//     charCount.textContent = `${remaining} characters remaining`;
// })


// username.addEventListener("change", (e) => {
//     console.log("change event", username.value);
// })

// username.addEventListener("input", (e) => {
//     console.log("input event", username.value);
// })


// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.Checked);
// })

// country.addEventListener("input", (e) => {
//     console.log(country.value);
// })



// username.addEventListener("focus", (e) => {
//     console.log("focus");
// })

// username.addEventListener("blur", (e) => {
//     console.log("blur");
// })


// password.addEventListener("focus", (e) => {
//     passwordHint.classList.remove("hidden")
// })

// password.addEventListener("blur", (e) => {
//     passwordHint.classList.add("hidden")
// })

