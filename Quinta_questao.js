import { defineConfig } from 'vite';
import promptSync from 'prompt-sync';
const prompt = promptSync();
const numero = parseInt(prompt("escolha seu numero"));
function mult (number){
    if (number > 0){
        for (let i = 0; i< 11; i++){
            const conta = number * i;
            console.log(conta);
        }
    }


}
mult(numero);