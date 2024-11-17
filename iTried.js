function calculateTotalMileage() {
    let totalMileage = 0;
    const mileageInputs = document.querySelectorAll("input[name='mileage']");
    mileageInputs.forEach(input => {
        totalMileage += parseFloat(input.value) || 0;
    });
    return totalMileage;
}

function calculateTotalMeals() {
    let totalMeals = 0;
    const itineraryRows = document.querySelectorAll("#itinerary-info tr");
    itineraryRows.forEach(row => {
        const checkedMeals = row.querySelectorAll("input[type='checkbox']:checked");
        totalMeals += checkedMeals.length;
    });
    return totalMeals;
}

function calculateTotalMealCosts() {
    let totalMealCosts = 0;
    const costInputs = document.querySelectorAll("input[name='total_meal_costs']");
    costInputs.forEach(input => {
        totalMealCosts += parseFloat(input.value) || 0;
    });
    return totalMealCosts;
}

function submitForm() {
    const form = document.forms['myForm'];
    const summary = `
        <h1 style="text-align: center;">Travel Expense Report</h1>
        <hr style="border: 1px solid black;">
        <h2 style="color: blue;">Traveller Information</h2>
        <p style="color: blue;">Employee ID: ${form.employee_ID.value}</p>
        <p style="color: blue;">Email: ${form.email.value}</p>
        <p style="color: blue;">Last Name: ${form.last_name.value}</p>
        <p style="color: blue;">First Name: ${form.first_name.value}</p>
        <p style="color: blue;">Address: ${form.title.value}</p>
        <p style="color: blue;">City: ${form.city.value}</p>
        <p style="color: blue;">State: ${form.state.value}</p>
        <p style="color: blue;">Zip: ${form.zip.value}</p>
        <p style="color: blue;">Phone: ${form.phone.value}</p>
        <p style="color: blue;">Total Auto Mileage: ${calculateTotalMileage()}</p>
        <p style="color: blue;">Total Number of Meals: ${calculateTotalMeals()}</p>
        <p style="color: blue;">Total Meal Costs: ${calculateTotalMealCosts()}</p>
    `;
    
    document.getElementById("summary").innerHTML = summary;
    document.forms['myForm'].style.display = 'none';
    document.getElementById("summary").style.display = 'block';
}

document.forms['myForm'].onsubmit = function(event) {
    event.preventDefault();
    submitForm();
};
