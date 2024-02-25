/*
Currency Converter
The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one currency and set the currency they want to check the monetary value of.

While developing the app, the beginners can master variables, algorithms, loops, if statements, and other TypeScript concepts.

Create a GitHub repository for the project and submit its URL in the project submission form.
*/

// Import the currency conversion library
import { exit } from "process";
import { convertCurrency, currencyCodes } from "./currency-converter.js";
import inquirer from "inquirer";

// Prompt user for input
console.log("Welcome to the SJ currency converter!");
async function main() {
    let continueLoop = true;
    while (continueLoop) {
        const { amount, inputCurrency, outputCurrency } = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter an amount to convert:",
                validate: (input) => {
                    if (isNaN(input)) {
                        return "Please enter a valid number";
                    }
                    return true;
                },
            },
            {
                name: "inputCurrency",
                type: "list",
                choices: currencyCodes,
                message: "Select input currency:",
            },
            {
                name: "outputCurrency",
                type: "list",
                choices: currencyCodes,
                message: "Select output currency:",
            },
        ]);

        // Convert the currency
        const convertedAmount = convertCurrency(
            amount,
            inputCurrency,
            outputCurrency,
        );

        // Print the result
        console.log(
            `${amount} ${inputCurrency} is ${convertedAmount} ${outputCurrency}`,
        );
        const { continueConversion } = await inquirer.prompt([
            {
                name: "continueConversion",
                type: "confirm",
                message: "Do you want to convert another currency? (Y/n)",
            },
        ]);

        if (!continueConversion) {
            continueLoop = false;
        }
    }
}
main();
