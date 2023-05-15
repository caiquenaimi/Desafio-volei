/*
let nomes = ["Caique" , "Enrico", "Gabriel" ,"Maria", "Matheus"];
let chamada = [4, 6 , 9 , 21 , 25];
let pc = [ 30 , 13 , 7 , 40 , 26];
let pro = Number(prompt("Digite um número de 1 a 5"));

if (pro == 1) {
    console.log(nomes[0],chamada[0],pc[0]);
} 
if (pro == 2) {
    console.log(nomes[1],chamada[1],pc[1]);
} 
if (pro == 3) {
    console.log(nomes[2],chamada[2],pc[2]);
} 
if (pro == 4) {
    console.log(nomes[3],chamada[3],pc[3]);
} 
if (pro == 5) {
    console.log(nomes[4],chamada[4],pc[4]);
} 

// console.log(nomes[pro-1],chamada[pro-1],pc[pro-1]);
*/
/* 
let nomescomA = [];
let nometotal = [];
let nomes = prompt("Digite os nomes").split(",");

nometotal.push(nomes);
nometotal.join(", ");


for (let i =0 ; i < nomes.length ; i++) {
    if(nometotal[i[0]] === "A" ) {
        nomescomA.push(nometotal);
    }
}
alert(nomescomA);
 */

/* let i = 0;
let pro;
let semana = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"];
let temp = [];
let soma = 0;
let media = 0;

while (i <= 6) {
    pro = Number(prompt("Digite um número"));
    temp.push(pro);
    soma += temp[i];
    media = soma / semana.length;
    i++;
}
console.log(semana);
console.log(temp);
console.log(media); */

/* let n1 = Number(prompt("Digite um valor para converter reais em dolár."))
let resp = n1 * 4.95;

if (n1 <= 0) {
    alert("Digite um valor válido");
} else {
    alert(`o valor em dolár é ${resp}`);
}  */


/* let n1 = Number(prompt("Digite um número"));
let resp1 = 0;


if (n1 < 0) {
    alert("Digite um valor válido");
} else if (n1 <= 30) {
    resp1 = n1 * 0.4;
    console.log(`o resultado é ${resp1}`);
}
else {
    resp1 = n1 * 0.3;
    console.log(`o resultado é ${resp1}`);
}  */

/* let mes = prompt("Digite o nome do mês para descobrir a estação do ano:")

switch (mes) {
    case "janeiro": alert("Verão");
        break;
        case "fevereiro": alert("Verão");
        break;
        case "março": alert("Outono");
        break;
        case "abril": alert("Outono");
        break;
        case "maio": alert("Outono");
        break;
        case "junho": alert("Inverno");
        break;
        case "julho": alert("Inverno");
        break;
        case "agosto": alert("Inverno");
        break;
        case "setembro": alert("Primavera");
        break;
        case "outubro": alert("Primavera");
        break;
        case "novembro": alert("Primavera");
        break;
        case "dezembro": alert("Verão");
        break;


    default:
        alert("Digite um mês válido")
        break;
}
 */

/* 
let i = 0;
let arrname = [];
let salario = Number(0);
let arrsala = [];
let adicionar;
let soma;
let mediasal =;

do {
    let nome = prompt("Digite seu nome");
    arrname.push(nome);
    let trab = prompt("Vc trabalha ?  (s ou n)");
    if(trab == "s") {
    salario = prompt("Qual sua taxa salarial");
    arrsala.push(salario);
    }
    adicionar = prompt("Vc deseja adicionar outro aluno?");
    soma += arrsala;
    mediasal = soma / i;
i ++;
} while( adicionar == "s");
console.log(i);
console.log(mediasal); */

/* function calcular(a, b) {
    return a + b;
}

let num1 = 5;
let num2 = "10";


let result = calcular(num1, Number(num2));
console.log(result); */

/* function stringreverse(str) {
    let reversestr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversestr += str[i];
    }
}

let string = "hello";
let reversed = stringreverse (string);
console.log(reversed); */

/* function getSmallestNumber(numbers) {
    let smallestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers [i] < smallestNumber) {
            smallestNumber = numbers[i];
        }
    }
    return smallestNumber;
}

let numbers = [5, 10, 2, 8, 3];
let smallestNumber = getSmallestNumber(numbers);
console.log(smallestNumber); */

/* function factorial(n) {
    if (n === 0) {
        return 1
    } else if (n < 0) {
        return undefined;
    }
    else {
        return n * factorial(n - 1);
    }
}
let result = factorial(-3);
console.log(result); */

/* var list = [];

function addEntrada() {
    var entrada = document.getElementById("campoTexto").value;

    list.push(entrada);

    document.getElementById("campoTexto").value = "";

    console.log(list);
 
    var contenttext = "";
    for (let i = 0; i <list.length; i++) {
        contenttext += `<p id = 'p1'> ${list[i]}</p>`;
      
    }
    document.getElementById("p1").innerHTML = contenttext;
}


var list2 = [];

function addEntrada2() {
    var entrada2 = document.getElementById("campoTexto2").value;

    list2.push(entrada2 );

    document.getElementById("campoTexto2").value = "";

    console.log(list2);
 
    var contenttext2 = "";
    for (let i = 0; i <list2.length; i++) {
        contenttext2 += `<p id = 'p2'> ${list2[i]}</p>`;
      
    }
    document.getElementById("p2").innerHTML = contenttext2;
}
 */



/* math.min */
/* let numeros = [10, 20, 30,];
let maior = Math.min(...numeros);
console.log(maior); */


/* math.max */
/* let numeros = [10, 20, 30,];
let maior = Math.max(...numeros);
console.log(maior); */

/* filter  filtra arrays*/
/* const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const novo = arr.filter(num => num %2 ==0);
console.log(novo);  */

/* concat  concatena */
/* var array1 = ['branco', 10, 20, 30, null];
var array2 = ['verde', 40, 50, 60, undefined];
array1 = array1.concat(array2);
console.log(array1); */

/* reverse inverte a posição dos arrays */
/* var array1 = ['branco', 10, 20, 30, "novo elemento "];
array1.reverse();
console.log(array1); */

/* shift  apaga o primeiro valor do array*/
/* var array1 = ['branco', 10, 20, 30, "novo elemento "];
array1.shift();
console.log(array1); */

/* unshift  coloca um primeiro valor no array*/
/* var array1 = ['branco', 10, 20, 30, "novo elemento "];
array1.unshift();
console.log(array1); */

