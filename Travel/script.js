
    // Mapping of states to districts
    const stateDistricts = {
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kurnool", "Nellore", "Rajahmundry"],
        "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro", "Bomdila"],
        "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur", "Nagaon", "Tinsukia"],
        "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia"],
        "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba", "Rajnandgaon", "Jagdalpur"],
        "Goa": ["Panaji", "Margao", "Vasco da Gama", "Ponda", "Mapusa"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
        "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal", "Rohtak"],
        "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Mandi", "Solan", "Kullu"],
        "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh"],
        "Karnataka": ["Bengaluru", "Mysore", "Mangalore", "Hubli", "Belgaum", "Shimoga"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Kannur"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur"],
        "Manipur": ["Imphal", "Bishnupur", "Churachandpur", "Thoubal", "Ukhrul", "Senapati"],
        "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongstoin", "Baghmara"],
        "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
        "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
        "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Berhampur", "Balasore"],
        "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"],
        "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli", "Tirunelveli"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
        "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut", "Prayagraj"],
        "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Almora", "Pithoragarh"],
        "West Bengal": ["Kolkata", "Howrah", "Darjeeling", "Durgapur", "Asansol", "Siliguri"]
    };
    
    document.getElementById('area').addEventListener('change', function() {
        const selectedState = this.value; // Get the selected state
        const districtField = document.getElementById('districtField');
        const districtSelect = document.getElementById('district');

        // Clear previous options
        districtSelect.innerHTML = '<option value="" disabled selected>Select your District</option>';

        if (selectedState) {
            // Show the district dropdown
            districtField.style.display = 'block';

            // Populate district dropdown based on selected state
            const districts = stateDistricts[selectedState];
            districts.forEach(function(district) {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        } else {
            districtField.style.display = 'none'; // Hide if no state selected
        }
    });

