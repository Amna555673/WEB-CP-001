document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Simulate authentication (replace with actual server request in production)
        if (email === "admin@gmail.com" && password === "123456") {
            alert("Login successful!");
            window.location.href = "products.html"; // Redirect to dashboard
        } else {
            alert("Invalid email or password.");
        }
    });
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
