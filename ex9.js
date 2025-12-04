const conta = {
    agencia: "0001",
    numeroConta: "123456-7",
    senha: "senha123",
    saldo: 1580.00,
    historico: []
};

const validarAcesso = (ag, num, s) => {
    const valido = ag === conta.agencia && num === conta.numeroConta && s === conta.senha;
    console.log(valido ? "Acesso validado com sucesso!" : "Agência, Conta ou Senha inválida.");
    return valido;
};

const exibirSaldo = () => {
    console.log(`Saldo atual: R$ ${conta.saldo.toFixed(2)}`);
};

const realizarSaque = (valor) => {
    if (valor % 10 !== 0) {
        console.log("Erro: O valor deve ser múltiplo de R$ 10.");
        return false;
    }
    if (valor > conta.saldo) {
        console.log("Saldo insuficiente.");
        return false;
    }

    conta.saldo -= valor;
    conta.historico.push({ tipo: "Saque", valor: -valor, data: new Date().toISOString().split('T')[0] });

    console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${conta.saldo.toFixed(2)}`);
    
    let restante = valor;
    const notas = [100, 50, 20, 10];
    const cedulasEntregues = [];

    for (const nota of notas) {
        const quantidade = Math.floor(restante / nota);
        if (quantidade > 0) {
            cedulasEntregues.push(`${quantidade}x nota(s) de R$ ${nota}`);
            restante %= nota;
        }
    }

    console.log("\nCédulas Entregues:");
    cedulasEntregues.forEach(item => console.log(`- ${item}`));
    
    return true;
};