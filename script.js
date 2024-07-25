document.getElementById('con').addEventListener('click', function() {

    const currency = document.getElementById('currency').value;
    const amountInput = document.getElementById('amount').value;

    // Regular expression to check if the input is a valid number
    const validNumberPattern = /^\d+(\.\d+)?$/;

    // Check if the value is valid
    if (validNumberPattern.test(amountInput)) {
        const amount = parseFloat(amountInput);
        let conversionRate;

        // Define the conversion rates for each currency
        switch (currency) {
            case 'dollars':
                conversionRate = 1504; //rate can change
                break;
            case 'pounds':
                conversionRate = 1902; //rate can change
                break;
            case 'euros':
                conversionRate = 1609; //rate can change
                break;
            case 'cedis':
                conversionRate = 98; //rate can change
                break; 
            case 'cad':
                conversionRate = 1098; //rate can change
                break; 
            case 'rupee':
                conversionRate = 98; //rate can change
                break; 
            case 'zar':
                conversionRate = 81; //rate can change
                break;
            case 'cny':
                conversionRate = 206; //rate can change
                break;
            default:
                alert('Please select a valid currency.');
                return;
        }

        // Perform the conversion
        const nairaValue = amount * conversionRate;

        // Display the result in the Naira input field
        document.getElementById('naira').value = nairaValue;
    } else {
        document.getElementById('naira').value = '';
        alert('Please enter a valid amount (numbers only).');
    }
});
