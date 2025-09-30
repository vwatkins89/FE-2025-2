// tres maneiras de instanciar uma variável no js

var nome = "Maria"; //global
console.log(nome);
var nome = 'Pedro';

// usando a palavra chave 'var' para instanciar uma variavel
// não é muito recomendado, apesar de possível, pois ela é instanciada globalmente, ou seja, todo o meu código tem acesso a ela
// além do seu valor poder ser alterado

//ela vai existir onde vc instanciar

function printPhone(){
    //ela vai existir onde vc instanciar dentro de um escopo
    let telefone = '999995555';
    console.log(telefone);

};
console.log(telefone); // erro, pois a variavel nao existe, ela nao foi definida

printPhone(); // chamada da função 

function printIdade(){
    const idade = '18';
    console.log(idade);

};

printIdade(); // chamada da função 

//tipos de dados
//string
let nome = 'Joao';
//number
let idade = 18;
//boolean
let estaCalor = true;
//undefined
let variavelIndefinida;
