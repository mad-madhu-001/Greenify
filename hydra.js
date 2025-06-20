// Function to calculate impact when switching to hydro energy
function calculateHydroImpact() {
    // Get input values from the form
    const currentEnergy = parseFloat(document.getElementById("currentEnergy").value);
    const hydroEfficiency = parseFloat(document.getElementById("hydroEfficiency").value);

    // Check if inputs are valid numbers
    if (isNaN(currentEnergy) || isNaN(hydroEfficiency) || currentEnergy <= 0 || hydroEfficiency <= 0) {
        alert("Please enter valid positive numbers for both inputs.");
        return;
    }

    // Hydro energy is usually more efficient than traditional fossil fuel sources.
    // Let's assume hydro energy can save up to 30% of the current energy consumption.
    const potentialSavings = (currentEnergy * hydroEfficiency) / 100;

    // Display the result
    const resultMessage = `By switching to hydro energy with an efficiency of ${hydroEfficiency}%, you could save approximately ${potentialSavings.toFixed(2)} kWh of energy!`;
    document.getElementById("result").innerText = resultMessage;
}
