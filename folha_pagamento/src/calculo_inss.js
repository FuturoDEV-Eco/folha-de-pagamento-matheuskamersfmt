function calcularINSS(grossSalary) {
    const maxValue = 908.85;
    let inssTax = 0;
    
    if (grossSalary <= 1412.00) {
        inssTax = 0.075;
    } else if (grossSalary <= 2666.68) {
        inssTax = 0.09;
    } else if (grossSalary <= 4003.03) {
        inssTax = 0.12;
    } else {
        inssTax = 0.14;
    }

    const inssValue = Math.min((grossSalary * inssTax), maxValue).toFixed(2);
    return Number(inssValue);
}

export default calcularINSS;