document.addEventListener("DOMContentLoaded", function () {
    // Generate expiry month and year dropdowns
    const expiryMonth = document.getElementById("expiryMonth");
    const expiryYear = document.getElementById("expiryYear");
    const currentYear = new Date().getFullYear();

    // Populate month dropdown
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement("option");
        option.value = i.toString().padStart(2, "0");
        option.textContent = i.toString().padStart(2, "0");
        expiryMonth.appendChild(option);
    }

    // Populate year dropdown
    for (let i = currentYear; i <= currentYear + 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        expiryYear.appendChild(option);
    }

    // Form validation
    const form = document.getElementById("validationForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const ccNumber = document.getElementById("ccNumber").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        const selectedMonth = expiryMonth.value;
        const selectedYear = expiryYear.value;

        // Error elements
        const nameError = document.getElementById("nameError");
        const ccError = document.getElementById("ccError");
        const cvvError = document.getElementById("cvvError");
        const expiryError = document.getElementById("expiryError");

        // Clear previous errors
        nameError.textContent = "";
        ccError.textContent = "";
        cvvError.textContent = "";
        expiryError.textContent = "";

        let isValid = true;

        // Validate Name
        if (!/^[A-Za-z\s]+$/.test(name)) {
            nameError.textContent = "Name must contain only alphabets.";
            isValid = false;
        }

        // Validate Credit Card Number
        if (!/^[4-6][0-9]{15}$/.test(ccNumber)) {
            ccError.textContent =
                "Card number must start with 4, 5, or 6 and have 16 digits.";
            isValid = false;
        }

        // Validate CVV
        if (!/^[0-9]{3}$/.test(cvv)) {
            cvvError.textContent = "CVV must be a 3-digit number.";
            isValid = false;
        }

        // Validate Expiry Date
        const now = new Date();
        const expiryDate = new Date(selectedYear, selectedMonth - 1);
        if (expiryDate <= now) {
            expiryError.textContent = "Expiry date must be in the future.";
            isValid = false;
        }

        // Final validation check
        if (isValid) {
            alert("Form submitted successfully!");
        }
    });

    // Auto focus to next field
    document.getElementById("name").addEventListener("input", function () {
        if (/^[A-Za-z\s]+$/.test(this.value)) {
            document.getElementById("ccNumber").focus();
        }
    });

    document.getElementById("ccNumber").addEventListener("input", function () {
        if (/^[4-6][0-9]{15}$/.test(this.value)) {
            document.getElementById("cvv").focus();
        }
    });

    document.getElementById("cvv").addEventListener("input", function () {
        if (/^[0-9]{3}$/.test(this.value)) {
            expiryMonth.focus();
        }
    });
});
