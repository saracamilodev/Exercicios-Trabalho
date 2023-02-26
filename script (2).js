let variavelA = Number (prompt("Digite um número:"))
let variavelR = Number (prompt("Digite outro número:"))
 
let resultado = ""

for(let v = 1; v <= 10; v++){
   
    variavelA = variavelA + variavelR;
    resultado += variavelA + "," +"";
}

alert("Os 10 primeiros valores da P.A são: " + resultado)
