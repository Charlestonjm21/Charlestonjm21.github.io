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


/* ------------------------------------------------------------
   validateForm()
   Runs every check. Individual field checks get added in the
   next steps.
   ------------------------------------------------------------ */
function validateForm() {
    clearMessages();

    // Field checks will go here in steps 3, 4 and 5

    // Temporary: confirms the button is wired up correctly
    showMessage("Validation ran for", "all fields", "empty");
}


// ----- Wire the buttons -----
submitButton.onclick = validateForm;

// The reset button clears the inputs on its own, but the messages
// are ours to clean up
clearButton.onclick = clearMessages;