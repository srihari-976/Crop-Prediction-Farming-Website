document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cropPredictionForm');
    const resultSection = document.querySelector('.prediction-result');
    const cropResult = document.getElementById('cropResult');
    const cropDetails = document.getElementById('cropDetails');

    // Crop database with details
    const cropDatabase = {
        'rice': {
            name: 'Rice',
            description: 'A staple food crop that grows well in warm, humid conditions with adequate water supply.',
            requirements: 'Requires high rainfall or irrigation, temperatures between 20-35°C, and slightly acidic soil (pH 5.5-6.5).'
        },
        'wheat': {
            name: 'Wheat',
            description: 'A major cereal grain crop suitable for temperate climates.',
            requirements: 'Grows best in well-drained soil, moderate temperatures (15-25°C), and requires less water than rice.'
        },
        'maize': {
            name: 'Maize (Corn)',
            description: 'A versatile crop used for food, feed, and industrial purposes.',
            requirements: 'Needs warm temperatures (20-30°C), well-drained soil, and moderate rainfall.'
        },
        'cotton': {
            name: 'Cotton',
            description: 'An important fiber crop that grows well in warm climates.',
            requirements: 'Requires long, frost-free periods, plenty of sunshine, and moderate rainfall.'
        }
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        resultSection.style.display = 'block';
        cropResult.textContent = 'Analyzing data...';
        cropDetails.textContent = 'Please wait while we process your information.';

        // Get form data
        const formData = {
            nitrogen: parseFloat(document.getElementById('nitrogen').value),
            phosphorus: parseFloat(document.getElementById('phosphorus').value),
            potassium: parseFloat(document.getElementById('potassium').value),
            temperature: parseFloat(document.getElementById('temperature').value),
            humidity: parseFloat(document.getElementById('humidity').value),
            ph: parseFloat(document.getElementById('ph').value),
            rainfall: parseFloat(document.getElementById('rainfall').value)
        };

        try {
            // Simulate API call with basic logic
            const predictedCrop = await predictCrop(formData);
            
            // Update UI with results
            resultSection.classList.add('show');
            cropResult.textContent = predictedCrop.name;
            cropDetails.textContent = `${predictedCrop.description}\n\nGrowing Requirements: ${predictedCrop.requirements}`;
            
        } catch (error) {
            cropResult.textContent = 'Error in prediction';
            cropDetails.textContent = 'There was an error processing your request. Please try again.';
        }
    });

    // Simple prediction logic (replace with actual ML model or API call)
    async function predictCrop(data) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simple logic for demonstration
        if (data.temperature > 25 && data.humidity > 70 && data.rainfall > 200) {
            return cropDatabase.rice;
        } else if (data.temperature < 25 && data.rainfall < 200) {
            return cropDatabase.wheat;
        } else if (data.temperature > 20 && data.ph > 6) {
            return cropDatabase.maize;
        } else {
            return cropDatabase.cotton;
        }
    }

    // Add form validation
    const inputs = form.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const value = parseFloat(input.value);
            const min = parseFloat(input.min);
            const max = parseFloat(input.max);

            if (value < min) input.value = min;
            if (value > max) input.value = max;
        });
    });

    // Add animation to form submission button
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', () => {
        if (form.checkValidity()) {
            submitButton.classList.add('loading');
            setTimeout(() => submitButton.classList.remove('loading'), 2000);
        }
    });
}); 