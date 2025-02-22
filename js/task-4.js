
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const emailData = email.value.trim();
    const passData = password.value.trim();
    if (!emailData || !passData) {
        alert("All form fields must be filled in");
        return;
    }
    console.log({
        email: emailData,
        password: passData
    });
    loginForm.reset();
});

