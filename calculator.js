/* ============================================================
   COMP 322 - Assignment 3
   calculator.js
   Author: Charlestone Mayenga
   Purpose: Repeatedly prompt the user for two numbers and an
            operator, compute the result, and display each
            calculation in a table followed by a summary table.
   ============================================================ */

let keepGoing = true;

// Collects every valid numeric result so the summary table
// can compute min, max, average and total.
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
        // Non-numeric or blank input in either number.
        // isNaN("") is false, so the empty check is needed too.
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

        // Store the full-precision value for the summary math,
        // then round the copy that gets displayed in the table
        if (typeof result === "number") {
            validResults.push(result);
            result = Number(result.toFixed(2));
        }
    }

    // ----- Write this calculation as a table row -----
    document.write("<tr><td>" + x + "</td><td>" + operator +
                   "</td><td>" + y + "</td><td>" + result +
                   "</td></tr>");
}

// ----- Close the results table -----
document.write("</table>");

/* ============================================================
   Summary table
   Reports min, max, average and total across every valid
   numeric result. Rows that produced an error were never
   pushed into validResults, so they are excluded here.
   ============================================================ */

document.write("<h2>Summary of Valid Results</h2>");

if (validResults.length === 0) {
    // Nothing valid to summarize — avoids dividing by zero and
    // avoids seeding min/max from an undefined array slot.
    document.write("<p>No valid calculations were entered.</p>");
} else {

    let min = validResults[0];
    let max = validResults[0];
    let total = 0;

    // Walk the list once, tracking the smallest, largest and sum
    for (let i = 0; i < validResults.length; i++) {
        if (validResults[i] < min) {
            min = validResults[i];
        }
        if (validResults[i] > max) {
            max = validResults[i];
        }
        total = total + validResults[i];
    }

    let avg = total / validResults.length;

    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th>" +
                   "<th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min.toFixed(2) + "</td><td>" +
                   max.toFixed(2) + "</td><td>" + avg.toFixed(2) +
                   "</td><td>" + total.toFixed(2) + "</td></tr>");
    document.write("</table>");
}