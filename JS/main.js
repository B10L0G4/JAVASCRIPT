var nome = "Vanessa Carraro";
var idade = 37;
var idade2 = 10;
//alert("Bem Vindo(a): " + nome + " e sua idade é: " + idade);
console.log(nome); // imprime a variável nome 
console.log(idade); // imprime a variável idade
console.log(idade + idade2);//soma as idades 

var lista =["banana","maçã","uva"]; // array - lista
lista.push("pêra") // inclui itens a lista 
//lista.pop("uva"); // exclui um item da lista 

console.log(lista.toString()[1]);// transfoma em string
console.log(lista.length) //tamanho da lista 

console.log(lista[1]);// imprimi apenas o item determinado 
console.log(lista); // imprime a lista 

console.log(lista.reverse());// coloca os itens ao contrário na lista 

console.log(lista.join(" - "));//transforma em string , porêm pode add parâmetros entre os itens 


 

//var fruta = {nome:"maçã", cor:"vermelha"} // dicionário
var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"verde"} ] // lista de dicionário
console.log(fruta[1].nome); 
console.log(fruta);