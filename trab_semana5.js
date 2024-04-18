// Exemplo utilizando var
function exemploVar() {
    if (true) {
        var a = 10;
    }
    console.log(a);
}

exemploVar(); 

// Exemplo utilizando let
function exemploLet() {
    if (true) {
        let b = 20;
    }
    //console.log(b); 
}

exemploLet(); 

// Exemplo utilizando const
function exemploConst() {
    const c = 30;
    console.log(c);
}

exemploConst(); 

// Características do tipo Array

// Tamanho do Array
let arrayTamanho = [1, 2, 3, 4, 5];
console.log("Tamanho do array:", arrayTamanho.length); 

// Recuperação de Elemento
let arrayRecuperacao = [10, 20, 30, 40, 50];
console.log("Elemento na posição 2:", arrayRecuperacao[2]); 

// Inclusão de Elemento
let arrayInclusao = [1, 2, 3];
arrayInclusao[3] = 4;
console.log("Array com elemento incluído:", arrayInclusao);

// push()
let arrayPush = [1, 2, 3];
arrayPush.push(4);
console.log("Array com push:", arrayPush);

// pop()
let arrayPop = [1, 2, 3, 4];
let elementoRemovidoPop = arrayPop.pop();
console.log("Elemento removido com pop:", elementoRemovidoPop);
console.log("Array atualizado com pop:", arrayPop);

// shift()
let arrayShift = [1, 2, 3, 4];
let elementoRemovidoShift = arrayShift.shift();
console.log("Elemento removido com shift:", elementoRemovidoShift);
console.log("Array atualizado com shift:", arrayShift);

// unshift()
let arrayUnshift = [2, 3, 4];
arrayUnshift.unshift(1);
console.log("Array atualizado com unshift:", arrayUnshift);
