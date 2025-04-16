document.getElementById("myForm").addEventListener("submit", function(event) {
    
    let isValid = true;

    // Getting input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Getting Error message elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError"); 
    let passwordError = document.getElementById("passwordError"); 

    // Clearing previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Name validation : Requried & Atleast 3 characters
    if (name === "")
    {
        nameError.textContent = "Name is Required";
        isValid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }

    // Email Validation : Required & valid format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "")
    {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // Password Validation : Required & minimum 6 characters
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    if (!isValid)
    {
        event.preventDefault();
    }

})