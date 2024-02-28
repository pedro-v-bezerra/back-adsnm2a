const readline = require("readline-sync");

const produtos = [];

function listar() {
    produtos.forEach(produto => console.log(`${produto.nome}-${produto.preco}`))
}

function criar() {
    const nome = readline.question("Entre com o nome do produto: ")
    const preco = readline.question("Entre com o preco do produto: ")
    const novo = {nome, preco}
    produtos.push(novo);
}

function buscar() {
    const nome = readline.question("Entre com o nome do produto: ")
    const busca = produtos.find(produto => produto.nome === nome)
    if (busca){
        console.log(`${busca.nome}--${busca.preco}`)
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

function menu(){
    console.log('1. Listar');
    console.log('2. Criar');
    console.log('3. Buscar');
    console.log('4. Atualizar');
    console.log('5. Remover');
    console.log('6. Sair');
}

function escolherOpcao(opcao){
    switch(opcao){
        case '1': listar(); break;
        case '2': criar(); break;
        case '3': buscar(); break;
        case '4': atualizar(); break;
        case '5': remover(); break;
        case '6': process.exit(0);
        default: console.log("Opcao Inválida!");
    }
    readline.question("Pressione Enter para continuar...")
}

function main() {
    while(true) {
        menu();
        const opcao = readline.question("Entre com uma opcao: ");
        escolherOpcao(opcao);
    }
}

main();