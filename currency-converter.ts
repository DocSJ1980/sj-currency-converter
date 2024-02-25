interface Currency {
    code: string;
    rate: number;
}

const currencies: Currency[] = [
    { code: 'USD', rate: 1 },
    { code: 'EUR', rate: 0.9 },
    { code: 'CAD', rate: 1.3 },
    { code: 'GBP', rate: 0.8 },
    { code: 'JPY', rate: 137 },
    { code: 'PKR', rate: 280 },

];

export function convertCurrency(amount: number, fromCode: string, toCode: string): number {

    // Get currency rates from list
    const fromRate = currencies.find(c => c.code === fromCode)?.rate;
    const toRate = currencies.find(c => c.code === toCode)?.rate;

    // Handle invalid currency codes
    if (!fromRate || !toRate) {
        throw new Error('Invalid currency code');
    }

    // Return converted amount
    return amount * toRate / fromRate;

}

export const currencyCodes = currencies.map(c => c.code);
