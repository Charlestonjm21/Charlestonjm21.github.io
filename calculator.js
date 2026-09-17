/* ============================================================
   COMP 322 - Assignment 3
   calculator.js
   Author: Charlestone Mayenga
   Purpose: Repeatedly prompt the user for two numbers and an
            operator, then display each calculation in a table.
   ============================================================ */

let keepGoing = true;

// Collects every valid numeric result so the summary table in
// step 4 can compute min, max, average and total.
let validResults = [];

// ----- Open the results table -----
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th>" +
               "<th>Number 2</th><th>Result</th></tr>");

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

    // ----- Validate and compute -----
    let result;

    if (isNaN(x) || isNaN(y) || x === "" || y === "") {
        // Non-numeric input in either number
        result = "Error: not a number";
    } else {
        // Convert the strings to actual numbers before computing.
        // Without this, "2" + "3" would concatenate to "23".
        let numX = Number(x);
        let numY = Number(y);

        if (operator === "+") {
            result = numX + numY;
        } else if (operator === "-") {
            result = numX - numY;
        } else if (operator === "*") {
            result = numX * numY;
        } else if (operator === "/") {
            result = numX / numY;
        } else if (operator === "%") {
            result = numX % numY;
        } else {
            result = "Error: invalid operator";
        }

        // Track valid numeric results for the summary table
        if (typeof result === "number") {
            validResults.push(result);
        }
    }

    // ----- Write this calculation as a table row -----
    document.write("<tr><td>" + x + "</td><td>" + operator +
                   "</td><td>" + y + "</td><td>" + result +
                   "</td></tr>");
}

// ----- Close the results table -----
document.write("</table>");