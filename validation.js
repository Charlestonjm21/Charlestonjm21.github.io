/* ============================================================
   COMP 322 - Assignment 4
   validation.js
   Author: Charlestone Mayenga
   Purpose: Validates fields 1-7 of form.html using regular
            expressions. Empty fields are reported in red,
            invalid entries in orange.
   ============================================================ */

// ----- Grab the elements we need to work with -----
let submitButton = document.getElementById("submitButton");
let clearButton = document.getElementById("clearButton");
let messageArea = document.getElementById("messages");


/* ------------------------------------------------------------
   showMessage()
   Writes one validation message into the message area.
   "empty" produces red text, "invalid" produces orange.
   ------------------------------------------------------------ */
function showMessage(text, fieldName, type) {
    let line = document.createElement("p");

    // The leading text stays black; only the field name is colored
    line.innerHTML = text + " <span class='" + type + "'>" +
                     fieldName + "</span>";

    messageArea.appendChild(line);
}


/* ------------------------------------------------------------
   clearMessages()
   Wipes the message area so each submit starts fresh instead
   of stacking messages from previous attempts.
   ------------------------------------------------------------ */
function clearMessages() {
    messageArea.innerHTML = "";
}

/* ============================================================
   Regular expressions
   Each pattern is anchored with ^ and $ so it must match the
   entire value, not just a fragment somewhere inside it.
   ============================================================ */

// Lowercase letters or digits only, 4 to 12 characters
let usernamePattern = /^[a-z0-9]{4,12}$/;

// Something, then @, then a domain ending in .net .com .org or .edu
let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(net|com|org|edu)$/;

// Exactly (123)-456-7890 — parentheses and hyphens are literal
let phonePattern = /^\(\d{3}\)-\d{3}-\d{4}$/;

// At least one lowercase, one uppercase, one digit, one special
// character, and more than 8 characters total.
// The (?=...) groups are lookaheads: each one scans the whole
// string for its requirement without consuming any characters,
// so all four conditions must hold at once.
let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{9,}$/;

/* ------------------------------------------------------------
   validateForm()
   Runs every check. Each field is tested for emptiness first,
   then for format.
   ------------------------------------------------------------ */
function validateForm() {
    clearMessages();

    // ----- Field 1: Username -----
    let username = document.getElementById("username").value;

    if (username === "") {
        showMessage("Please Enter", "Username", "empty");
    } else if (!usernamePattern.test(username)) {
        showMessage("Please Enter", "a valid username", "invalid");
    }

    // ----- Field 2: Email -----
    let email = document.getElementById("email").value;

    if (email === "") {
        showMessage("Please Enter", "Email", "empty");
    } else if (!emailPattern.test(email)) {
        showMessage("Please Enter", "a valid email", "invalid");
    }

    // ----- Field 3: Phone number -----
    let phone = document.getElementById("phone").value;

    if (phone === "") {
        showMessage("Please Enter", "Phone Number", "empty");
    } else if (!phonePattern.test(phone)) {
        showMessage("Please Enter", "a valid phone number", "invalid");
    }
        // ----- Field 4: Password -----
    let password = document.getElementById("password").value;

    if (password === "") {
        showMessage("Please Enter", "Password", "empty");
    } else if (!passwordPattern.test(password)) {
        showMessage("Please Enter", "a valid password", "invalid");
    }

    // ----- Field 5: Confirm password -----
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (confirmPassword === "") {
        showMessage("Please Enter", "Confirm Password", "empty");
    } else if (password !== confirmPassword) {
        // The assignment asks for an alert here, not an inline message
        alert("passwords do not match");
    }
        // ----- Field 6: Gender -----
    // Radio buttons share a name, so querySelector with :checked
    // finds whichever one is selected, or null if none are.
    let gender = document.querySelector("input[name='gender']:checked");

    if (gender === null) {
        showMessage("Please Select", "Gender", "empty");
    }

    // ----- Field 7: Age Group -----
    // The first <option> has an empty value, so nothing selected
    // reads as an empty string.
    let ageGroup = document.getElementById("ageGroup").value;

    if (ageGroup === "") {
        showMessage("Please Select", "Age Group", "empty");
    }
        // If nothing was written to the message area, everything passed
    if (messageArea.innerHTML === "") {
        showMessage("Form submitted", "successfully", "valid");
    }
}


// ----- Wire the buttons -----
submitButton.onclick = validateForm;

// The reset button clears the inputs on its own, but the messages
// are ours to clean up
clearButton.onclick = clearMessages;