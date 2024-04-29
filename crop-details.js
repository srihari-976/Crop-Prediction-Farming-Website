document.addEventListener('DOMContentLoaded', function() {
    // Function to extract query parameter from URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the crop name from the query parameter
    const cropName = getQueryParam('crop');

    // Update the crop name in the HTML
    const cropNameElement = document.getElementById('crop-name');
    cropNameElement.textContent = cropName;

    // Define crop details (replace with actual values)
    const cropDetails = {
        'Tomato': {
            description: 'Tomato is a widely grown vegetable with various culinary uses.',
            fertilizers: 'NPK (10-26-26), Urea, DAP',
            disease: 'Tomato Blight',
            diseasePhoto: 'tomato_blight.jpeg',
            marketPrice: '₹17000.00 per ton'
        },
        'Sugarcane': {
            description: 'Sugarcane is a tall perennial grass widely cultivated for its sweet juice.',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Red Rot',
            diseasePhoto: 'red_rot.jpg',
            marketPrice: '₹3050.00 per ton'
        },
        'Rice': {
            description: 'Rice is a cereal grain, the most widely consumed staple food for a large part of the world.',
            fertilizers: 'Urea, DAP, Potash',
            disease: 'Blast',
            diseasePhoto: 'rice_blast.jpeg',
            marketPrice: '₹27500.00 per ton'
        },
        'Turmeric': {
            description: 'Turmeric is a flowering plant of the ginger family, commonly used as a spice in cooking.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Rhizome Rot',
            diseasePhoto: 'turmeric_rhizome_rot.jpeg',
            marketPrice: '₹150570.00 per ton'
        },
        'Ginger': {
            description: 'Ginger is a flowering plant whose rhizome is widely used as a spice and a folk medicine.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Bacterial Wilt',
            diseasePhoto: 'ginger_bacterial_wilt.jpeg',
            marketPrice: '₹130000 per ton'
        },
        'Cotton': {
            description: 'Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium.',
            fertilizers: 'NPK (12-24-12), Urea, Potash',
            disease: 'Cotton Wilt',
            diseasePhoto: 'cotton_wilt.jpg',
            marketPrice: '₹45000 per ton'
        },
        'Toor Dal': {
            description: 'Toor dal, also known as pigeon pea, is a perennial legume from the family Fabaceae.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Fusarium Wilt',
            diseasePhoto: 'toor_dal_fusarium_wilt.jpg',
            marketPrice: '₹116000 per ton'
        },
        'Moong Dal': {
            description: 'Moong dal, also known as mung bean, is a plant species in the legume family.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Yellow Mosaic Virus',
            diseasePhoto: 'moong_dal_yellow_mosaic_virus.webp',
            marketPrice: '₹102,166.67 per ton'
        },
        'Urad Dal': {
            description: 'Urad dal, also known as black gram, is a bean grown in the Indian subcontinent.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Powdery Mildew',
            diseasePhoto: 'urad_dal_powdery_mildew.jpg',
            marketPrice: '₹103,054.55 per ton'
        },
        'Coffee': {
            description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.',
            fertilizers: 'NPK (12-24-12), Urea, Potash',
            disease: 'Coffee Leaf Rust',
            diseasePhoto: 'coffee_leaf_rust.jpg',
            marketPrice: '₹221000 per ton'
        },
        'Coconut': {
            description: 'Coconut is a mature fruit of the cocos nucifera palm.',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Lethal Yellowing Disease',
            diseasePhoto: 'coconut_lethal_yellowing_disease.jpg',
            marketPrice: '₹26500 per ton'
        },
        'Jackfruit': {
            description: 'Jackfruit is a species of tree in the fig, mulberry, and breadfruit family.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Anthracnose',
            diseasePhoto: 'jackfruit_anthracnose.jpg',
            marketPrice: '₹22900.00 per ton'
        },
        'Cashew': {
            description: 'Cashew is a kidney-shaped seed sourced from the cashew tree.',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Cashew Nut Borer',
            diseasePhoto: 'cashew_nut_borer.png',
            marketPrice: '₹120000.00 per ton'
        },
        'Beetroot': {
            description: 'Beetroot is the taproot portion of the beet plant, usually known in Canada and the USA as beets.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Cercospora Leaf Spot',
            diseasePhoto: 'beetroot_cercospora_leaf_spot.jpeg',
            marketPrice: '₹24000 per ton'
        },
        'Cauliflower': {
            description: 'Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Downy Mildew',
            diseasePhoto: 'cauliflower_downy_mildew.jpg',
            marketPrice: '₹25200.00 per ton'
        },
        'Cowpea': {
            description: 'Cowpea, commonly referred to as southern peas, black-eyed peas, or field peas, is a legume.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Cowpea Aphid-borne Mosaic Virus',
            diseasePhoto: 'cowpea_aphid_borne_mosaic_virus.jpg',
            marketPrice: '₹96000 per ton'
        },
        'Soybean': {
            description: 'Soybean, also called soya bean, is an annual leguminous plant grown for its edible bean.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Soybean Rust',
            diseasePhoto: 'soybean_rust.png',
            marketPrice: '₹47000.00 per ton'
        },
        'Maize': {
            description: 'Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Corn Smut',
            diseasePhoto: 'maize_corn_smut.jpeg',
            marketPrice: '₹21,487.91 per ton'
        },
        'Groundnut': {
            description: 'Groundnut, also known as peanut, is a legume crop grown mainly for its edible seeds.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Peanut Bud Necrosis',
            diseasePhoto: 'groundnut_peanut_bud_necrosis.jpeg',
            marketPrice: '₹61800.00 per ton'
        },
        'Jowar': {
            description: 'Jowar, also known as sorghum, is a cereal grain that is widely cultivated in warm regions of the world.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Sorghum Downy Mildew',
            diseasePhoto: 'jowar_sorghum_downy_mildew.jpg',
            marketPrice: '₹33000.00 per ton'
        },
        'Castor': {
            description: 'Castor is a species of perennial flowering plant in the spurge family, Euphorbiaceae.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Castor Leaf Spot',
            diseasePhoto: 'castor_leaf_spot.jpeg',
            marketPrice: '₹53,576.25 per ton'
        },
        'Ragi': {
            description: 'Ragi, also known as finger millet, is a widely grown annual plant in the genus Eleusine.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Ragi Blast',
            diseasePhoto: 'ragi_blast.jpg',
            marketPrice: '₹30000 per ton'
        },
        'Bajra': {
            description: 'Bajra, also known as pearl millet, is a cereal grain that is widely grown in arid and semi-arid regions of Africa and Asia.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Bajra Ergot',
            diseasePhoto: 'bajra_ergot.png',
            marketPrice: '₹21,930.80 per ton'
        },
        'Banana': {
            description: 'Banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Panama Disease',
            diseasePhoto: 'banana_panama_disease.jpg',
            marketPrice: '₹65000 per ton'
        },
        'Pulp': {
            description: 'Pulp is a soft, moist, shapeless mass of matter.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Unknown',
            diseasePhoto: 'no_image_available.jpg',
            marketPrice: 'Varies'
        },
        'Wheat': {
            description: 'Wheat is a cereal grain, originally from the Levant region of Western Asia, now cultivated worldwide.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Wheat Rust',
            diseasePhoto: 'wheat_rust.jpeg',
            marketPrice: '₹25000 per ton'
        },
        'Mustard': {
            description: 'Mustard is a condiment made from the seeds of a mustard plant.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Alternaria Blight',
            diseasePhoto: 'mustard_alternaria_blight.jpeg',
            marketPrice: '₹51659.00 per ton'
        },
        'Potato': {
            description: 'Potato is a root vegetable that is part of the plant Solanum tuberosum.',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Late Blight',
            diseasePhoto: 'potato_late_blight.jpeg',
            marketPrice: '₹19300.00 per ton'
        },
        'Beans': {
            description: 'Beans are seeds from the Fabaceae family, commonly eaten around the world.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Common Bean Mosaic Virus',
            diseasePhoto: 'beans_common_bean_mosaic_virus.jpeg',
            marketPrice: '₹73,479.17 per ton'
        },
        'Pineapple': {
            description: 'Pineapple is a tropical plant with edible multiple fruit consisting of coalesced berries.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Pineapple Wilt',
            diseasePhoto: 'pineapple_wilt.jpeg',
            marketPrice: '₹25000.00 per ton'
        },
        'Capsicum': {
            description: 'Capsicum is a genus of flowering plants in the nightshade family Solanaceae.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Pepper Anthracnose',
            diseasePhoto: 'capsicum_anthracnose.jpeg',
            marketPrice: '₹33,433.10 per ton'
        },
        'Radish': {
            description: 'Radish is an edible root vegetable of the family Brassicaceae.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Radish Yellows',
            diseasePhoto: 'radish_yellows.jpeg',
            marketPrice: '₹21500.00 per ton'
        },
        'Watermelon': {
            description: 'Watermelon is a flowering plant species of the Cucurbitaceae family.',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Watermelon Mosaic Virus',
            diseasePhoto: 'watermelon_mosaic_virus.jpg',
            marketPrice: '₹13200.00 per ton'
        },
        'Onion': {
            description: 'Onion is a vegetable that is the most widely cultivated species of the genus Allium.',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Onion Smut',
            diseasePhoto: 'onion_smut.jpeg',
            marketPrice: '₹21,071.07 per ton'
        },
        'Garlic': {
            description: 'Garlic is a species in the onion genus, Allium.',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'White Rot',
            diseasePhoto: 'garlic_white_rot.jpeg',
            marketPrice: '₹40000.00 per ton'
        },
        'Pulses': {
            description: 'Pulses are a type of leguminous crop harvested solely for the dry seed.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Ascochyta Blight',
            diseasePhoto: 'pulses_ascochyta_blight.jpeg',
            marketPrice: '₹116000.00 per kg'
        },
        'Sunflower': {
            description: 'Sunflower is an annual plant in the family Asteraceae, with a large flower head.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Sunflower Downy Mildew',
            diseasePhoto: 'sunflower_downy_mildew.jpeg',
            marketPrice: '₹42100.00 per ton'
        },
        'Barley': {
            description: 'Barley is a member of the grass family and a major cereal grain.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Barley Yellow Dwarf Virus',
            diseasePhoto: 'barley_yellow_dwarf_virus.jpeg',
            marketPrice: '₹25000.00 per kg'
        },
        'Green Gram': {
            description: 'Green gram, also known as mung bean, is a plant species in the legume family.',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Mungbean Yellow Mosaic Virus',
            diseasePhoto: 'green_gram_mungbean_yellow_mosaic_virus.jpeg',
            marketPrice: '₹98,390.91 per ton'
        },
        'Rubber': {
            description: 'Rubber is a hydrocarbon polymer produced from latex, a milky colloid obtained from the sap of some plants.',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Rubber Phytophthora Leaf Fall',
            diseasePhoto: 'rubber_phytophthora_leaf_fall.jpeg',
            marketPrice: '₹177000 per ton'
        }
     // Add more crop details as needed
    };

    // Update the crop description, fertilizers, and disease details in the HTML
    const cropDescriptionElement = document.getElementById('crop-description');
    cropDescriptionElement.textContent = cropDetails[cropName].description;

    const cropFertilizersElement = document.getElementById('crop-fertilizers');
    cropFertilizersElement.textContent = 'Recommended fertilizers: ' + cropDetails[cropName].fertilizers;

    const cropDiseaseElement = document.getElementById('crop-disease');
    cropDiseaseElement.textContent = 'Common disease: ' + cropDetails[cropName].disease;

    const cropDiseasePhotoElement = document.getElementById('crop-disease-photo');
    cropDiseasePhotoElement.src = 'images/' + cropDetails[cropName].diseasePhoto;

    const cropMarketPriceElement = document.getElementById('crop-market-price');
    cropMarketPriceElement.textContent = 'Current market price: ' + cropDetails[cropName].marketPrice;

    // Redirect to crop details page when crop image is clicked
    const cropImageElement = document.getElementById('crop-image');
    cropImageElement.addEventListener('click', function() {
        // Redirect to another page when crop photo is clicked
        window.location.href = `crop-details.html?crop=${encodeURIComponent(cropName)}`;
    });
});
