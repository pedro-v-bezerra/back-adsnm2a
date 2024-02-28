const readline = require("readline-sync");
const Produto = require("./modelo");

const produtos = [];

function listar() {
    produtos.forEach(produto => console.log(produto.toString()))
}

function criar() {
    const nome = readline.question("Entre com o nome do produto: ");
    const preco = readline.question("Entre com o preco do produto: ");
    const novo = new Produto (nome, preco);
    produtos.push(novo);
}

function buscar() {
    const nome = readline.question("Entre com o nome do produto: ")
    const busca = produtos.find(produto => produto.nome === nome)
    if (busca){
        console.log(busca.toString())
    }else{
        console.log(`'${nome}' não encontrado`)
    }
}

function atualizar() {
    const nome = readline.question("Entre com o nome do produto: ")
    const busca = produtos.find(produto => produto.nome === nome)
    if(busca){
        const preco = readline.question("Entre com o novo preco: ")
        busca.preco = preco
    }else{
        console.log(`'${nome}' não encontrado`)
    }
}

function remover(){
    const nome = readline.question("Entre com o nome do produto: ")
    const index = produtos.findIndex(produto => produto.nome === nome)
    if(index>=0){
        produtos.splice(index, 1)
    }else{
        console.log(`'${nome}' não encontrado`)
    }
}

module.exports = {criar, listar, buscar, atualizar, remover}