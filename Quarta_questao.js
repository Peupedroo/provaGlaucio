import {i} from "vite/dist/node/types.d-aGj9QkWt.js";

const aluno = {
    nome : "pedro",
    notas : [10, 9 , 8]
};
let soma = 0
for (let i = 0; i < aluno.notas.length; i++) {
        soma  += aluno.notas[i] ;

}

const media = soma / aluno.notas.length;
console.log(media);