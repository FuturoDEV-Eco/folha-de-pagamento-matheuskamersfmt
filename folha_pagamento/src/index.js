import readline from 'readline';
import calcInssTax from './calculo_inss.js';
import calcIncomeTax from './calculo_imposto_renda.js';
import calcNteSalaray from './calculo_salario_liquido.js';
import generatePdf from './gerar_pdf.js';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

input.question("Digite o nome do funcionário: ", (name) => {
    input.question("Digite o CPF do funcionário: ", (cpf) => {
        input.question("Digite o mês de competência (1 a 12): ", (month) => {
            input.question("Digite o salário bruto: ", (grossSalary) => {
                const inssTax = calcInssTax(grossSalary);
                const incomeTax = calcIncomeTax(grossSalary);
                const netSalary = calcNteSalaray(grossSalary, inssTax, incomeTax);

                console.log(`
                --- Folha de Pagamento ---
                Nome: ${name}
                CPF: ${cpf}
                Mês de competência: ${month}
                Salário bruto: R$ ${grossSalary}
                Desconto INSS: R$ ${inssTax}
                Desconto IRRF: R$ ${incomeTax}
                Salário líquido: R$ ${netSalary}
                `);

                input.question("Deseja gerar um PDF com estas informações? (sim/não)", async (answer) => {
                    if (answer.toLocaleLowerCase() === "sim") {
                        await generatePdf(name, cpf, month, grossSalary, inssTax, incomeTax, netSalary);
                        console.log("PDF gerado com sucesso!");
                    } else {
                        console.log("Obrigado por utilizar nosso sistema de folha de pagamento.");
                    }
                    input.close();
                });
            });
        });
    });
});