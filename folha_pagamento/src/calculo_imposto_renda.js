function calcIncomeTax(grossSalary) {
    let incomeTax = 0;

    if (grossSalary <= 2112.00) {
        incomeTax = 0;
    } else if (grossSalary <= 2826.65) {
        incomeTax = 0.075;
    } else if (grossSalary <= 3751.05) {
        incomeTax = 0.15;
    } else if (grossSalary <= 4664.68) {
        incomeTax = 0.225;
    } else {
        incomeTax = 0.275;
    }

    const incomeTaxValue = (grossSalary * incomeTax).toFixed(2);
    return Number(incomeTaxValue);
}

export default calcIncomeTax;