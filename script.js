const prompt = require("prompt-sync")();

function fullName(firstName, lastName) {
    firstName = prompt("What is your first name? ")
    lastName = prompt("What is your sirname? ")
    let fullName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`
    if (firstName.length === 0 || lastName.length === 0) {
        console.log("Invaild name input");
        return;
    }
    else {
        console.log(`Hello ${fullName} it's a pleasure to meet you.`);
    }
}

fullName()

function calculateTotalCost(price, quantity, taxRate) {
    if (isNaN(price, quantity, taxRate)) {
        console.log("Invaild input. Please used numbers.");
    }
    else {
    let totalCost = (price * quantity) * (1 + taxRate)
    console.log(totalCost);
    }
}

calculateTotalCost(5,15,.7)