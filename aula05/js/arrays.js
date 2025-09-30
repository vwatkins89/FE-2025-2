let series = ['House', 'Dexter', 'Game of Thrones', 'Chaves'];
console.log('printando um index apenas:', series[1]);
console.log('printando o array inteiro:', series);

//verificar o tamanho do array - LENGTH()
console.log('tamanho do array:', series.length);

//adiconar um elemento ao array - PUSH()
console.log('adicionando um index ao array', series.push('The Office'));
console.log(series); 

//MAP - cria um array novo a partir de um já estabelecido e retorna um novo array
// com as mudanças declaradas na função de parametro do map
let numeros = [1, 2, 3, 4, 5, 6];
//console.log('array antes do map (original)', numeros);

//let numerosDobrados = numeros.map((numero)=>{
//return numero * 2;
//});

//console.log( 'novo array depois do map (modificado)' , numerosDobrados); 

//procurar algo dentro do array - FIND

const maiorQueTres = numeros.find((numero)=> numero > 3);
console.log('find', maiorQueTres); 

//filtrar o array - FILTER
//retorna um array novo 
const maiorQueTresFilter = numeros.filter((numero)=> numero > 3);
console.log('filter', maiorQueTresFilter);