function calculateTotal() {
  // Get form values
  const firstItem = document.getElementById('firstItem').value;
  const cost1 = parseFloat(document.getElementById('cost1').value);
  const quantity1 = parseInt(document.getElementById('quantity1').value);
  const secondItem = document.getElementById('secondItem').value;
  const cost2 = parseFloat(document.getElementById('cost2').value);
  const quantity2 = parseInt(document.getElementById('quantity2').value);
  const salesTax = parseFloat(document.getElementById('salesTax').value);

  // Validate input
  if (isNaN(cost1) || cost1 < 0 || isNaN(quantity1) || quantity1 < 1 ||
      isNaN(cost2) || cost2 < 0 || isNaN(quantity2) || quantity2 < 1 ||
      isNaN(salesTax) || salesTax < 0 || salesTax > 100) {
      alert('Please enter valid values.');
      return;
  }

  // Calculate costs
  const totalCost1 = cost1 * quantity1;
  const totalCost2 = cost2 * quantity2;
  const subTotal = totalCost1 + totalCost2;
  const taxAmount = (salesTax / 100) * subTotal;
  const grandTotal = subTotal + taxAmount;

  // Display results
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
      <p>(${quantity1}) ${firstItem}(s) @ $${cost1.toFixed(2)} = $${totalCost1.toFixed(2)}</p>
      <p>(${quantity2}) ${secondItem}(s) @ $${cost2.toFixed(2)} = $${totalCost2.toFixed(2)}</p>
      <p>SubTotal Before Tax = $${subTotal.toFixed(2)}</p>
      <p>${salesTax}% Sales Tax = $${taxAmount.toFixed(2)}</p>
      <p>Grand Total = $${grandTotal.toFixed(2)}</p>
  `;
}