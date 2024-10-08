import promptSync from 'prompt-sync'; // Importa o pacote prompt-sync
const prompt = promptSync(); // Inicializa o prompt

const arr = [];

for (let i = 0; i < 5; i++) {
    let tarefas = prompt("insira as tarefas que vc quer fazer");
    arr.push(tarefas);
}
console.log(arr)
let quer = prompt("quer remover uma tarefa ");
if (quer.toLowerCase() === "sim") {
    while (true){
        let tarefas = prompt("quer remover uma tarefa ");
        const index = arr.indexOf(tarefas);

        if (index !== -1 ){
            arr.splice(index, 1);
            console.log (`a tarefa ${tarefas} foi removida `);

        }else {
            console.log("o index nao foi encontrado ");
            break;
        }
        let parar = prompt("Quer parar? (1 para sim / qualquer tecla para continuar)");
        if (parar === "1") {
            break;}
    }
}




console.log(arr)
