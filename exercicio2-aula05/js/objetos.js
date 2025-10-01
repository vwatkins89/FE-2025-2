let id = [1, 2, 3, 4];
let preco = [50, 120, 200, 30];
const produtos = [
  { id: 1, nome: "Camiseta", preco: 50 },
  { id: 2, nome: "Calça", preco: 120 },
  { id: 3, nome: "Tênis", preco: 200 },
  { id: 4, nome: "Boné", preco: 30 }
];

const idIgualTres = id.find((id)=> id == 3);
console.log('find', idIgualTres); 

const precoMaiorQueCemFilter = preco.filter((preco)=> preco > 100);
console.log('filter', precoMaiorQueCemFilter);

