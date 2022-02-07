//-  Monte um pacote de node que faça a leitura de dois numeros.
// -  Depois execute uma escolha entre as 4 operações.
// -  Por final devolva a operação executada e o resultado de acordo.
// - O pacote deve usar módulos inquirer e um módulo interno.
// - Entregue por link de repositório GITHUB.

const inquirer = require('inquirer');         
const calculadora = require('./calculadora');

inquirer.prompt([
    {
        name: 'n1',
        message: 'Por favor, digite o primeiro número:'
    },
    {
        name: 'n2',
        message: "Agora digite o segundo número:"
    },
    {
        name: 'operacao',
        message: 'Qual operação deseja realizar?\n1- somar\n2- subtrair\n3- multiplicar\n4- dividir\n'
    }
]).then((answer)=>{

    let n1 = parseFloat(answer.n1)
    let n2 = parseFloat(answer.n2)
    let op = answer.operacao
    let resultado
    
        switch(op){
                case '1':
                    resultado = calculadora.somar(n1, n2)
                    console.log(`A soma do número ${n1} com o número ${n2} é igual a ${n1+n2}.`)
                    break;
                case '2':
                    resultado = calculadora.subtrair(n1, n2)
                    console.log(`A subtração do número ${n1} com o número ${n2} é igual a ${n1-n2}.`)
                    break;
                case '3':
                    resultado = calculadora.multiplicar(n1, n2)
                    console.log(`O produto do número ${n1} com o número ${n2} é igual a ${n1*n2}.`)
                    break;
                case '4':
                    resultado = calculadora.dividir(n1, n2)
                    console.log(`A divisão do número ${n1} com o número ${n2} é igual a ${n1/n2}.`)
                    break;
            default:
                console.log(`Opção inválida`);
            break;
        }
}).catch((err) => console.log(err))
