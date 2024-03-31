const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
containerFormRegister = document.querySelector(".register")
containerFormLogin = document.querySelector(".login")

//Bajar Iniciar Sesion
btnSignIn.addEventListener("click", e => {
    containerFormRegister.classList.add("hide")
    containerFormLogin.classList.remove("hide")
})

//Bajar Registrarse
btnSignUp.addEventListener("click", e => {
    containerFormLogin.classList.add("hide")
    containerFormRegister.classList.remove("hide")
})

