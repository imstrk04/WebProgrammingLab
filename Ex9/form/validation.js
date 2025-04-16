function validateForm() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Clear error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    
    let isValid = true;

    if (username.length < 5) {
        document.getElementById("usernameError").innerText = "Username must be atleast 5 characters long";
        isValid = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Enter a valid email address.";
      isValid = false;
    }
  
    let passwordRegex = /^(?=.*[0-9]).{8,}$/;

    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long and include a number.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Password do not match";
        isValid = false;
    }

    return isValid;


}