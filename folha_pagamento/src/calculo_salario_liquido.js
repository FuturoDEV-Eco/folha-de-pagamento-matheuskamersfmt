function calcNetSalary(grossSalary, inssValue, incomeTaxValue, otherDiscounts = 0) {
    const netSalary = grossSalary - inssValue - incomeTaxValue - otherDiscounts;
    return netSalary;
} 

export default calcNetSalary;