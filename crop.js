// Sample crop data with photos
const crops = [
    // Rainy season
    { name: "Sugarcane", soil: "Red", season: "Rainy", photo: "sugarcane.jpg" },
    { name: "Rice", soil: "Red", season: "Rainy", photo: "rice.jpg" },
    { name: "Turmeric", soil: "Red", season: "Rainy", photo: "turmeric.jpg" },
    { name: "Ginger", soil: "Red", season: "Rainy", photo: "ginger.jpg" },

    { name: "Cotton", soil: "Black", season: "Rainy", photo: "cotton.jpg" },
    { name: "Toor Dal", soil: "Black", season: "Rainy", photo: "toor.jpg" },
    { name: "Moong Dal", soil: "Black", season: "Rainy", photo: "moong.jpg" },
    { name: "Urad Dal", soil: "Black", season: "Rainy", photo: "urad.jpg" },

    { name: "Coffee", soil: "Laterite", season: "Rainy", photo: "coffee.jpg" },
    { name: "Coconut", soil: "Laterite", season: "Rainy", photo: "coconut.jpg" },
    { name: "JackFruit", soil: "Laterite", season: "Rainy", photo: "jackFruit.jpg" },
    { name: "Cashew", soil: "Laterite", season: "Rainy", photo: "cashew.jpg" },

    { name: "Beetroot", soil: "Alluvial", season: "Rainy", photo: "beetroot.jpg" },
    { name: "Ginger", soil: "Alluvial", season: "Rainy", photo: "ginger.jpg" },
    { name: "Cauliflower", soil: "Alluvial", season: "Rainy", photo: "cauliflower.jpg" },
    { name: "Cowpea", soil: "Alluvial", season: "Rainy", photo: "cowpea.jpg" },
    
// --------------------------------------------------------------------------------------------------
//Summer season

    { name: "Soybean", soil: "Red", season: "Summer", photo: "soybean.jpg" },
    { name: "Maize", soil: "Red", season: "Summer", photo: "maize.jpg" },
    { name: "Cotton", soil: "Red", season: "Summer", photo: "cotton.jpg" },
    { name: "Groundnut", soil: "Red", season: "Summer", photo: "groundnut.jpg" },

    { name: "Cotton", soil: "Black", season: "Summer", photo: "cotton.jpg" },
    { name: "Soybean", soil: "Black", season: "Summer", photo: "soybean.jpg" },
    { name: "Jowar", soil: "Black", season: "Summer", photo: "jowar.jpg" },
    { name: "Castor", soil: "Black", season: "Summer", photo: "castor.jpg" },

    { name: "Ragi", soil: "Laterite", season: "Summer", photo: "ragi.jpg" },
    { name: "Groundnut", soil: "Laterite", season: "Summer", photo: "groundnut.jpg" },
    { name: "Bajra", soil: "Laterite", season: "Summer", photo: "bajra.jpg" },
    { name: "Jowar", soil: "Laterite", season: "Summer", photo: "jowar.jpg" },

    { name: "Rice", soil: "Alluvial", season: "Summer", photo: "rice.jpg" },
    { name: "Banana", soil: "Alluvial", season: "Summer", photo: "banana.jpg" },
    { name: "Cotton", soil: "Alluvial", season: "Summer", photo: "cotton.jpg" },
    { name: "Pulp", soil: "Alluvial", season: "Summer", photo: "pulp.jpg" },

    // --------------------------------------------------------------------------------------------------
    // Spring season

    { name: "Tomato", soil: "Red", season: "Spring", photo: "tomato.jpg" },
    { name: "Mustard", soil: "Red", season: "Spring", photo: "mustard.jpg" },
    { name: "Potato", soil: "Red", season: "Spring", photo: "potato.webp" },
    { name: "Beans", soil: "Red", season: "Spring", photo: "beans.jpg" },

    { name: "Cotton", soil: "Black", season: "Spring", photo: "cotton.jpg" },
    { name: "Jowar", soil: "Black", season: "Spring", photo: "jowar.jpg" },
    { name: "Soybean", soil: "Black", season: "Spring", photo: "soybean.jpg" },
    { name: "Toor Dal", soil: "Black", season: "Spring", photo: "toor.jpg" },

    { name: "Pineapple", soil: "Laterite", season: "Spring", photo: "pineapple.jpg" },
    { name: "JackFruit", soil: "Laterite", season: "Spring", photo: "jackFruit.jpg" },
    { name: "Capsicum", soil: "Laterite", season: "Spring", photo: "capsicum.jpg" },
    { name: "Radish", soil: "Laterite", season: "Spring", photo: "radish.jpg" },

    { name: "Sugarcane", soil: "Alluvial", season: "Spring", photo: "sugarcane.jpg" },
    { name: "Banana", soil: "Alluvial", season: "Spring", photo: "banana.jpg" },
    { name: "Rice", soil: "Alluvial", season: "Spring", photo: "rice.jpg" },
    { name: "Watermelon", soil: "Alluvial", season: "Spring", photo: "watermelon.jpg" },

    // --------------------------------------------------------------------------------------------------
    // Winter season

    { name: "Wheat", soil: "Red", season: "Winter", photo: "wheat.jpg" },
    { name: "Onion", soil: "Red", season: "Winter", photo: "onion.jpg" },
    { name: "Garlic", soil: "Red", season: "Winter", photo: "garlic.jpg" },
    { name: "Potato", soil: "Red", season: "Winter", photo: "potato.webp" },

    { name: "Pulses", soil: "Black", season: "Winter", photo: "pulses.jpg" },
    { name: "Wheat", soil: "Black", season: "Winter", photo: "wheat.jpg" },
    { name: "Sunflower", soil: "Black", season: "Winter", photo: "sunflower.jpg" },
    { name: "Mustard", soil: "Black", season: "Winter", photo: "mustard.jpg" },

    { name: "Barley", soil: "Laterite", season: "Winter", photo: "barley.jpg" },
    { name: "Green gram", soil: "Laterite", season: "Winter", photo: "green.jpg" },
    { name: "Jowar", soil: "Laterite", season: "Winter", photo: "jowar.jpg" },
    { name: "Rubber", soil: "Laterite", season: "Winter", photo: "rubber.avif" },

    { name: "Rice", soil: "Alluvial", season: "Winter", photo: "rice.jpg" },
    { name: "Wheat", soil: "Alluvial", season: "Winter", photo: "wheat.jpg" },
    { name: "Barley", soil: "Alluvial", season: "Winter", photo: "barley.jpg" },
    { name: "Sunflower", soil: "Alluvial", season: "Winter", photo: "sunflower.jpg" },

];

// Function to filter crops based on soil type and season
function filterCrops(soilType, season, cropName) {
    let filteredCrops = crops;
    if (soilType && season) {
        filteredCrops = filteredCrops.filter(crop => crop.soil === soilType && crop.season === season);
    }
    if (cropName) {
        filteredCrops = filteredCrops.filter(crop => crop.name.toLowerCase().includes(cropName.toLowerCase()));
    }
    return filteredCrops;
}

// Function to display filtered crops
function displayCrops(crops) {
    const cropGallery = document.querySelector('.crop-gallery');
    cropGallery.innerHTML = '';
    crops.forEach(crop => {
        const cropDiv = document.createElement('div');
        cropDiv.classList.add('crop-item');
        cropDiv.innerHTML = `
            <img src="${crop.photo}" alt="${crop.name}">
        `;
        cropDiv.addEventListener('click', () => {
            // Redirect to another page when crop photo is clicked
            window.location.href = `crop-details.html?crop=${crop.name}`;
        });
        cropGallery.appendChild(cropDiv);
    });
}

// Event listener for search button click
document.getElementById('search-btn').addEventListener('click', () => {
    const soilType = document.getElementById('soil-select').value;
    const season = document.getElementById('season-select').value;
    const cropName = document.getElementById('search-bar').value.trim();

    const filteredCrops = filterCrops(soilType, season, cropName);
    displayCrops(filteredCrops);
});
