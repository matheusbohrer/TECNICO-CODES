function somaNumeros3() {
    let ganhoBrutoAnual = 0;
    let gastoAnual = 0;

    for (let mes = 1; mes <= 12; mes++) {
        let ganhoBruto = parseFloat(prompt(`Informe o ganho bruto do mês ${mes}:`));
        let gasto = parseFloat(prompt(`Informe o gasto do mês ${mes}:`));

        if (isNaN(ganhoBruto) || isNaN(gasto)) {
            alert("Por favor, informe números válidos.");
            mes--;
        } else {
            ganhoBrutoAnual += ganhoBruto;
            gastoAnual += gasto;
        }
    }

    let saldoFinanceiro = ganhoBrutoAnual - gastoAnual;
    let resultado = saldoFinanceiro >= 0 ? "Lucro" : "Prejuízo";

    alert(`📊 Balanço Anual:
    🏦 Ganho Bruto Total: R$ ${ganhoBrutoAnual.toFixed(2)}
    💸 Gasto Total: R$ ${gastoAnual.toFixed(2)}
    💰 Saldo Financeiro: R$ ${saldoFinanceiro.toFixed(2)}
    📢 Resultado: ${resultado}`);
}