let multiplyResult = 0;

function resetCalculations() {
    // Clear all result fields
    document.getElementById("result").textContent = "";
    document.getElementById("sifResult").textContent = "";
    document.getElementById("sifPPL").textContent = "";
    
    // Reset multiplyResult
    multiplyResult = 0;
  }

  document.getElementById("numberInput").addEventListener("input", resetCalculations);


function divideNumber(divisor) {
  // Get the number input by the user
  const number = Number(document.getElementById("numberInput").value);

  // Check if the input is a valid number
  if (isNaN(number) || number === 0) {
    document.getElementById("result").textContent =
      "Please enter a valid number greater than 0.";
    return;
  }

  // Perform division
  const result = number / divisor;

  const formattedResult = result.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  document.getElementById(
    "result"
  ).innerHTML = `Result: ${number} divided by ${divisor} is <span class="results">${formattedResult}</span>`;
}

function multiplyBy(divisor) {
  // Get the number input by the user
  const number = Number(document.getElementById("numberInput").value);

  // Check if the input is a valid number
  if (isNaN(number) || number === 0) {
    document.getElementById("result").textContent =
      "Please enter a valid number greater than 0.";
    return;
  }

  // Perform multiplication
  multiplyResult = number * divisor; // Store result in multiplyResult

  const formattedResult = multiplyResult.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Display the result
  document.getElementById(
    "sifResult"
  ).innerHTML = `Result: ${number} multiplied by ${divisor} is <span class="results">${formattedResult}</span>`;
}

function divideSIF(divisor) {
  // Check if multiplyResult is valid
  if (isNaN(multiplyResult) || multiplyResult === 0) {
    document.getElementById("sifPPL").textContent =
      "Please perform a multiplication first.";
    return;
  }

  // Perform division on the multiplyResult
  const result = multiplyResult / divisor;

  // Format result as currency
  const formattedResult = result.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Display the result in the sifPPL element
  document.getElementById(
    "sifPPL"
  ).innerHTML = `${multiplyResult.toFixed(
    2
  )} divided by ${divisor} is <span class="results">${formattedResult}</span>`;
}
