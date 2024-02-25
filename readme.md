## NodeJS/TypeScript Currency Converter Application

### Cloud Applied Project Generative AI Engineer (Batch 53 Quarter 1)

This is a NodeJS application that allows users to convert currency amounts between different currencies.

It uses the Inquirer.js module to prompt the user for input and the custom currency-converter.ts module to perform the actual currency conversion logic.

**Main Application Logic (index.ts)**
The main application logic is contained in index.ts:

- Imports the convertCurrency and currencyCodes functions from currency-converter.ts
- Imports inquirer for prompts
- Defines an async main() function that contains the app logic


**The main() function:**

- Prints a welcome message
- Starts a while loop to allow multiple conversions
- Uses inquirer.prompt to ask the user for:
  - Amount to convert
  - Input currency code
  - Output currency code
- Validates amount is a number
- Calls convertCurrency() to convert the amount
- Prints conversion result
- Asks if the user wants to convert again
- Exits loop if user is done
- Currency Conversion Logic (currency-converter.ts)


**The currency-converter.ts module contains:**

- A Currency interface defining a currency code and exchange rate
- A currencies array containing currency data
- The convertCurrency() function that converts between two currencies
- A currencyCodes array containing just the currency codes


**The convertCurrency() function:**

- Finds the input and output currency rates from currencies
- Throws error if invalid currency code
- Returns the converted amount by multiplying by the currency rates

This separation of concerns keeps the currency conversion logic reusable and testable.

Overall, this shows a simple NodeJS command line application with TypeScript using Inquirer for prompts and custom modules for business logic.