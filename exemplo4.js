function criarMatriz(){
let matriz = []; // armazena as linhas
let contador = 1;

for(let i = 0; i < 3; i++){
    matriz[i] = [];

    for(let j = 0; j < 3; j ++){

        matriz[i][j] = contador++;
    }
}
    return matriz;
}

function exibirMatriz(matriz){
    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i].join(' '));
    }
}
let matriz = criarMatriz();
exibirMatriz(matriz);