/* var nome = "Vanessa Carraro";
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
console.log(fruta); */

//condicional

/*var idade = prompt("Qual a sua Idade: ");
if (idade >=18){
    alert("Maior de Idade!");
}else{
    alert("Menor de Idade");
};*/

//laços de repetição
/*var count = 0;
while(count <5){
    console.log(count);
    count = count +1; // or count++ , possui a função de incremento tal qual o count +1 
}*/

// laço de repetição FOR

/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
};*/

//Date 
/*var d= new Date(); // como utilizar datas 
    alert(d);
    alert(d.getMonth()+1);
    alert(d.getDay());
    alert(d.getMinutes());
    alert(d.getHours());*/

/*function soma(n1,n2){ // funções , são utilizadas para chamar uma parte do código em qualquer 
    //outra para/trecho do código 
    return n1 + n2 
};
alert(soma(5,10))

/*function setReplace(frase,nome, novo_nome){
    return frase.replace(nome,novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"))

function validaIdade(idade){ // validação de idade utilizando funções 
    var validar;
    if (idade >=18){
        validar = true;
    }else{
        validar=false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));    //a função validarIdade esta sendo chamada aqui. */

function clique(){ 
    document.getElementById("Acknowledgment").innerHTML="Click Me"; // manipulando elemento web
    console.log("Thanks")
}
function redirecionar(){
    window.open("https://github.com/B1olog4");// abre em uma nova janela 
    window.location.href = "https://github.com/B1olog4"; // abre na mesma janela 
    //vai pegar do documento através do ID eke ira trazer o elemento com o o id estabelecido no HTML 
}
function change(elemento){
    //document.getElementById("Mousemove").innerHTML="Thanks for test with me"// mudar texto on mouse 
    elemento.innerHTML="Thanks for test with me";
}
function back(elemento){
    //document.getElementById("Mousemove").innerHTML="Mouse Over Here"// mudar texto on mouse 
    elemento.innerHTML="Mouse Over Here";
} 
function Load(){ // quando carrega o body ele carrega a "definição" 
    alert("Page On")
}
function funcaoChange(elemento){
    console.log(elemento.value); //.value carrega i valor do elemento, sem aspas 
}
