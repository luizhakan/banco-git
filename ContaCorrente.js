// exportando a classe para criação de novas contas correntes

import { Cliente } from "./Cliente.js";

export class contaCorrente {
    // PÚBLICO
    static numeroDeContas = 0; // deixando esse valor estático, sempre que a classe contaCorrente for chamada, o valor dele se altera
    agencia;
    cliente;

    // Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura!
    
    // Usando assessores do tipo set podemos alterar a regra de como um atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código
    set cliente(novoValor){
        if(novoValor instanceof Cliente)
        this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas +=1;
    }
    // A inicialização de atributos é a principal responsabilidade do construtor

    // PRIVADO
    _saldo = 0;
    // função de saque
    sacar(valor) {
        if (this._saldo >= valor)/*o # é usado para definir um objeto privado https://github.com/tc39/proposal-class-fields#private-fields*/ {
            this._saldo -= valor;
            return console.log(`Valor sacado : R$${valor}, saldo atual $ : R$${this._saldo}`);
            // console.log(this.#saldo);
        }
    }
    // função de depósito
    depositar(valor) {
        if (valor <= 0 /*Aqui me diz q o valor não pode ser um valor negativo, justamente para evitar a subtração de valor no saldo da conta corrente*/)
        return console.log(`Você tentou depositar R$${valor}, valor não pode ser igual ou menor que 0`); {
            this._saldo += valor;
            return console.log(`Valor depositado R$${valor}, saldo atual : R$${this._saldo}`)
            // console.log(this.#saldo);
        }

    }

    transferir(valor, conta){
        // conta.cidade = "Recife" // ATENÇÃO! SE EU FIZER QUALQUER ALTERAÇÃO EM UM OBJETO QUE EU ESTOU RECEBENDO DENTRO DE UM PARÂMETRO, EU ESTOU ALTERANDO O OBJETO ORIGINALn
        this.sacar(valor);
        conta.depositar(valor);
    }
}