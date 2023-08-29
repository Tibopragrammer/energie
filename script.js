document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    const resultElement = document.getElementById('result');

    calculateButton.addEventListener('click', function() {
        const electricityPrice = parseFloat(document.getElementById('electricityPrice').value);
        const gasolinePrice = parseFloat(document.getElementById('gasolinePrice').value);
        const mileage = parseFloat(document.getElementById('mileage').value);
        const electricityConsumption = parseFloat(document.getElementById('electricityConsumption').value);

        if (!isNaN(electricityPrice) && !isNaN(gasolinePrice) && !isNaN(mileage) && !isNaN(electricityConsumption)) {
            const electricityCost = parseFloat((electricityPrice / electricityConsumption).toFixed(2));
            const gasolineCost = parseFloat((gasolinePrice / mileage).toFixed(2));

            const electricityCostPer100Km = electricityCost * 100;
            const gasolineCostPer100Km = gasolineCost * 100;

            let savings;
            let savingsText;
            let cheapestOption;

            if (electricityCost === gasolineCost) {
                savings = 0;
                savingsText = 'No savings';
                cheapestOption = 'Both options are equal';
            } else if (gasolineCost < electricityCost) {
                savings = (electricityCostPer100Km - gasolineCostPer100Km);
                savingsText = `You save €${savings.toFixed(2)}`;
                cheapestOption = 'Using fuel is cheaper';
            } else {
                savings = (gasolineCostPer100Km -electricityCostPer100Km);
                savingsText = `You save €${savings.toFixed(2)}`;
                cheapestOption = 'Using electricity is cheaper';
            }

            resultElement.textContent = `${savingsText}. ${cheapestOption}. Electricity cost per 100 km: €${electricityCostPer100Km.toFixed(2)}. fuel cost per 100 km: €${gasolineCostPer100Km.toFixed(2)}.`;
        } else {
            resultElement.textContent = 'Please enter valid values.';
        }
    });

    // Clear the result and input fields when reset button is clicked
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {
        document.getElementById('electricityPrice').value = '';
        document.getElementById('gasolinePrice').value = '';
        document.getElementById('mileage').value = '';
        document.getElementById('electricityConsumption').value = '';
        resultElement.textContent = '';
    });
});
