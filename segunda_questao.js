import { defineConfig } from 'vite';
import promptSync from 'prompt-sync';


const prompt = promptSync();

function verificarPalindromo(palavra) {
    const palavraFormatada = palavra.replace(/\s+/g, '').toLowerCase();
    const tamanho = palavraFormatada.length;

    for (let i = 0; i < tamanho / 2; i++) {
        if (palavraFormatada[i] !== palavraFormatada[tamanho - 1 - i]) {
            return `${palavra} não é um palíndromo.`;
        }
    }
    return `${palavra} é um palíndromo!`;
}


const palavraUsuario = prompt("Digite uma palavra: ");
const resultado = verificarPalindromo(palavraUsuario);
console.log(resultado);
