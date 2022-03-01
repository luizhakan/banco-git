import {Cliente} from "./Cliente.js";
import {contaCorrente} from "./ContaCorrente.js";
// aqui eu crio uma variável definir um cliente e chamar a função
const cliente1 = new Cliente("Ricardo", 11122233309);  

const contaHakan = new Cliente("Luiz Hakan", 80928394012);
// aqui eu crio uma variável definir uma conta corrente e chamar a função
const contaCorrenteRicardo = new contaCorrente(1001, cliente1);

const contaCorrenteHakan = new contaCorrente(1969, contaHakan);
// USANDO O MÉTODO DE DEPÓSITO NA CONTA CORRENTE
contaCorrenteRicardo.depositar(500)

console.log(contaCorrenteRicardo)
console.log(contaCorrenteHakan)
console.log(`Quantidade de conta(s) : ${contaCorrente.numeroDeContas}`)
// Se tivermos código que se repete porém não forma um contexto coeso, provavelmente teremos que criar duas classes, cada uma delimitando um contexto único que faça sentido.
/*
curiosidades sobre métodos:
1 - Usamos métodos para dar nomes aos comportamentos que nossa classe possui e isso facilita a comunicação dentro da equipe

2 - um método pode ter nenhum, um ou mais parâmetros. Essa é a maneira de passarmos informações para podermos reutilizar métodos em diferentes cenários

3 - Um método define o comportamento ou a maneira de fazer algo.
*/
/*
curiosidades sobre atributos:
1 - Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado.

2 - Atualmente no Js nenhum atributo ou método é realmente privado
*/
// Dentro do JS cada arquivo é considerado um módulo e podemos escolher o que queremos exportar ou não a partir dele.
// A organização de um projeto de programação é algo muito importante para que conforme o sistema crescer encontrarmos mais facilmente as classes e lugares que queremos alterar