export const formatPrice = (priceInUSD) => {
    const conversionRate = 83;
    const priceInINR = priceInUSD * conversionRate;
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(priceInINR);
};
