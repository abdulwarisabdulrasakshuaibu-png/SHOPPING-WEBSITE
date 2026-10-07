function createAccount() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {

        alert("Please fill in all the fields");

        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account created successfully!");

    window.location.href = "login.html";
}


function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {

        alert("Login successful!");

        window.location.href = "home.html";

    } else {

        alert("Incorrect email or password");

    }
}


function logout() {

    window.location.href = "login.html";
}


let name = localStorage.getItem("name");

let welcome = document.getElementById("welcome");

if (welcome && name) {

    welcome.textContent = "Welcome, " + name + "!";

}
  

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email === "") {
        message.textContent = "Email is required";
        return;
    }

    if (password === "") {
        message.textContent = "Password is required";
        return;
    }

    message.textContent = "Login successful!";
});