/* ============================================================
   COMP 322 - Assignment 3
   calculator.js
   Author: Charlestone Mayenga
   Purpose: Repeatedly prompt the user for two numbers and an
            operator, then display each calculation in a table.
   ============================================================ */

// Controls the loop. prompt() returns null when the user clicks
// Cancel, which is how we know to stop asking.
let keepGoing = true;

while (keepGoing) {

    // ----- Dialog 1: first number -----
    let x = prompt("Enter the first number:");
    if (x === null) {
        keepGoing = false;
        break;
    }

    // ----- Dialog 2: second number -----
    let y = prompt("Enter the second number:");
    if (y === null) {
        keepGoing = false;
        break;
    }

    // ----- Dialog 3: operator -----
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) {
        keepGoing = false;
        break;
    }

    // Temporary: confirms the loop is capturing input correctly.
    // Step 3 replaces this with a table row.
    console.log(x, operator, y);
}