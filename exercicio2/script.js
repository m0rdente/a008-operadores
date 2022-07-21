let primeiroNumero = prompt ("Insira um número")
let segundoNumero = prompt ("Insira outro número")
const comparacaoA = ("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
const comparacaoB = ("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
const comparacaoC = ("O primeiro numero é divisível pelo segundo?", (primeiroNumero % segundoNumero) === 0)
const comparacaoD = ("O segundo numero é divisível pelo primeiro?", (segundoNumero % primeiroNumero) === 0)

console.log ("O primeiro numero é maior que segundo?", comparacaoA)
console.log ("O primeiro numero é igual ao segundo?", comparacaoB)
console.log ("O primeiro numero é divisível pelo segundo?", comparacaoC)
console.log ("O segundo numero é divisível pelo primeiro?", comparacaoD)

