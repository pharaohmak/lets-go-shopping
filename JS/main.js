/**
 * Makram Ibrahim
 * Aug 15, 2022
 * 2.2 Code Exercise 03: Let's Go Shopping
 * 
 */


// Inform Users Whats Going On
window.alert("Welcome to your Virtual Store!");
window.alert("I will ask you about the item you want to buy and calculate a receipt.");

// Collect Data for Items
// Prompt user for first item(s)
let firstItem = window.prompt("Please enter the name of the first item(s)");
cost1 = window.prompt("Please enter the cost of each " + firstItem + ".");
quantity1 = window.prompt("Please enter the number of " + firstItem + "(s).");

totalCost1 = cost1 * quantity1

// Prompt user for second item(s)
let secondItem = window.prompt("Please enter the name of the second item(s)");
cost2 = window.prompt("Please enter the cost of each " + firstItem + ".");
quantity2 = window.prompt("Please enter the number of " + firstItem + "(s).");

totalCost2 = cost2 * quantity2

// Prompt User for Sales Tax
let tax = window.prompt("What is the sales tax? (Please round to nearest whole number.)")


// Print Total Cost to Console
console.log("(" + quantity1 + ")" + firstItem + "(s) @ $" + cost1 + " = $" + totalCost1);
console.log("(" + quantity2 + ")" + secondItem + "(s) @ $" + cost2 + " = $" + totalCost2)

// Calculate Subtotal
subTotal = totalCost1 + totalCost2
console.log("SubTotal Before Tax = "  + subTotal + "%");


// Calculate Sales Tax 
salesTax = tax / 100
console.log(tax + "% Sales Tax = " + salesTax);

// Calculate Grand Total
grandTotal = totalCost1 + totalCost2 + salesTax
console.log("Grand Total = $" + grandTotal);


// Prompt User To Check Console For Results
window.alert("Remember to Check the Console for Results")
