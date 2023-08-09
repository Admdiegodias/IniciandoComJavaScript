/* 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello Word!")*/

/* 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas. 
alert("Solicite dois números inteiros! ")
let numberOne = prompt('Digite um número')
let numberTwo = prompt('Digite um número novamente! ')

let result = Number(numberOne) + Number(numberTwo)
//alert(`Resultado final é: ${result}`)
// ou
alert('Resultado final é: ' + result)*/

/* 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`

var number = prompt('Digite u número')

if(!isNaN(number)){
  alert("É um número! ")
} else{
  alert("Não é um número")
}*/

/* 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

var variable = prompt("Digite qualquer coisa! ")

if(typeof variable === 'string'){
  alert('É uma string! ')
} else{
  alert('Não é uma string! ')
}*/

/* 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let dado = true


if(typeof dado === 'boolean'){
  alert('É um booleano! ')
} else{
  alert('Não é um booleano')
}
*/

/* 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let firstNumber = prompt('Digite um valor! ')
let secondNumber = prompt('Digite novamente um valor! ')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const subtracao = firstNumber - secondNumber
alert(`A subtração entre: ${firstNumber} - ${secondNumber} é de: ${subtracao}`)*/

/* 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let numberOne = prompt("Digite um valor! ")
let numberTwo = prompt("Digite um valor novamente! ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const multi = numberOne * numberTwo

alert(`A multiplicação entre: ${numberOne} x ${numberTwo} é de: ${multi}`)*/

/* 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let numberX = prompt('Digite um valor! ')
let numberY = prompt('Digite um valor novamente! ')

numberX = Number(numberX)
numberY = Number(numberY)

const div = numberX / numberY

alert(`A divisão entre: ${numberX} / ${numberY} é de: ${div}`)*/

/* 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

var numberRandom = Math.floor(Math.random() * 100 ) + 1

if (numberRandom % 2 === 0) {
  alert(numberRandom + 'é um número par! ')
} else {
  alert(numberRandom + ' não é um número par, é um número ímpar! ')
} */

/* 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". 

var numberRandom = Math.floor(Math.random() * 100) + 1

if (numberRandom % 2 !== 0) {
  alert(numberRandom + ' é um número ímpar! ')
} else {
  alert(numberRandom + ' não é um número ímpar, é um número par! ')
}*/