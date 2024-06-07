const email = document.querySelector(".email");
const password = document.querySelector(".password");
const statusBar = document.querySelector(".status");

function loginUser(event) {
    event.preventDefault();
    const userEmail = sessionStorage.getItem("email");
    const userPassword = sessionStorage.getItem("password");
    console.log(userEmail)
    console.log(userPassword)
    if (email.value == userEmail) {
        if ( password.value == userPassword) {
            window.location.href = "./index.html"
        }else{
            statusBar.innerHTML = `<p style="color: red;">Invalid Login Details</p>`
        }
    } else {
        console.log("Wrong Details")
        statusBar.innerHTML = `<p style="color: red;">Invalid Login Details</p>`
    }
}

function signUpUser(event) {
    event.preventDefault();
    console.log(event)
    const  emailField = email.value;
    const passwordField = password.value;
    sessionStorage.setItem("email", emailField);
    sessionStorage.setItem("password", passwordField);
    window.location.href = "./login.html"
}