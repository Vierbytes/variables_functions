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


age = prompt("Age: ")
isEmployed = prompt("Are you employed? (Y/N) ")

function checkEligibility(age, isEmployed) {
    if (age < 18) {
        console.log("Sorry you're Not Eligible.");
        return
    }
    else if ( age >= 18 && isEmployed == "Y") {
        console.log("You're Eligible");
        return
    }
    else (age >= 18 && isEmployed == "N")
    {
        console.log("You're Condiditionally Eligible.");
        return
    }
}

checkEligibility(age, isEmployed)


function discountedCost(price, quantity, taxRate, discount = 0) {
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
        console.log("Invalid input. Please use numbers.");
        return;
    }
        const subtotal = price * quantity;
        const discountedAmount = subtotal * (1 - discount);
        const totalCost = discountedAmount * (1 + taxRate);
        console.log(totalCost);

}

discountedCost(5, 10, .7)
discountedCost(5, 10, .7, .1)