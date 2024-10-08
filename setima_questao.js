import { defineConfig } from 'vite';


const produtos = [
    { nome: 'Produto A', preco: 10.00, quantidade: 5 },
    { nome: 'Produto B', preco: 15.50, quantidade: 3 },
    { nome: 'Produto C', preco: 7.25, quantidade: 10 }
];


function calcularValorEstoque(produtos) {
    let valorTotal = 0;

    for (const produto of produtos) {
        valorTotal += produto.preco * produto.quantidade;
    }

    return valorTotal;
}


const totalEstoque = calcularValorEstoque(produtos);

console.log(`O valor total do estoque é: R$ ${totalEstoque.toFixed(2)}`);