import { defineConfig } from 'vite';
import promptSync from 'prompt-sync';
const prompt = promptSync();
const arr = []
for(let i = 0; i < 5 ; i++) {
    const nome = prompt("nome ");
    const idade =  parseInt(prompt("Idade: "), 10);
    arr.push({nome, idade});
}
for (let i = 0; i < arr.length ; i++) {


    if (arr[i].idade >= 18){
        console.log(arr[i].nome,arr[i].idade);
    }
}
