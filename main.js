const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Collect Data for Items
// Prompt user for first item(s)
rl.question("Please enter the name of the first item(s): ", (answer) => {
  const firstItem = answer || "";
  rl.question("Please enter the cost of each " + firstItem + ": ", (answer) => {
    const cost1 = parseFloat(answer) || 0;
    rl.question("Please enter the number of " + firstItem + "(s): ", (answer) => {
      const quantity1 = parseInt(answer, 10) || 0;

      if (isNaN(cost1) || cost1 < 0) {
        console.error("Invalid cost for first item(s).");
        process.exit(1);
      }

      if (isNaN(quantity1) || quantity1 < 1) {
        console.error("Invalid quantity for first item(s).");
        process.exit(1);
      }

      const totalCost1 = cost1 * quantity1;

      // Prompt user for second item(s)
      rl.question("Please enter the name of the second item(s): ", (answer) => {
        const secondItem = answer || "";
        rl.question("Please enter the cost of each " + secondItem + ": ", (answer) => {
          const cost2 = parseFloat(answer) || 0;
          rl.question("Please enter the number of " + secondItem + "(s): ", (answer) => {
            const quantity2 = parseInt(answer, 10) || 0;

            if (isNaN(cost2) || cost2 < 0) {
              console.error("Invalid cost for second item(s).");
              process.exit(1);
            }

            if (isNaN(quantity2) || quantity2 < 1) {
              console.error("Invalid quantity for second item(s).");
              process.exit(1);
            }

            const totalCost2 = cost2 * quantity2;

            // Prompt User for Sales Tax
            rl.question("What is the sales tax? (Please round to nearest whole number.): ", (answer) => {
              const tax = parseFloat(answer) || 0;

              if (isNaN(tax) || tax < 0 || tax > 100) {
                console.error("Invalid sales tax.");
                process.exit(1);
              }

              const salesTax = tax / 100;

              // Print Total Cost to Console
              console.log("(" + quantity1 + ")" + firstItem + "(s) @ $" + cost1 + " = $" + totalCost1);
              console.log("(" + quantity2 + ")" + secondItem + "(s) @ $" + cost2 + " = $" + totalCost2);

              // Calculate Subtotal
              const subTotal = totalCost1 + totalCost2;
              console.log("SubTotal Before Tax = $ "  + subTotal);

              // Calculate Sales Tax
              console.log(tax + "% Sales Tax = " + salesTax);

              // Calculate Grand Total
              const grandTotal = totalCost1 + totalCost2 + salesTax;
              console.log("Grand Total = $" + grandTotal);

              // Prompt User To Check Console For Results
              console.log("Remember to Check the Console for Results");

              rl.close();
            });
          });
        });
      });
    });
  });
});

rl.on("close", function() {
  console.log("\nExiting the program...");
  process.exit(0);
});