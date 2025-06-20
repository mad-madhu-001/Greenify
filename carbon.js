function calculateFootprint() {
    const transport = document.getElementById('transport').value;
    const electricity = document.getElementById('electricity').value;
    const waste = document.getElementById('waste').value;

    const footprint = (transport * 0.15) + (electricity * 0.25) + (waste * 0.05); // Example calculation
    document.getElementById('result').innerText = `Your estimated carbon footprint is: ${footprint.toFixed(2)} kg CO2 per week.`;
}

