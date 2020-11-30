//SOLUCAO 1
/*A cada leitura da entrada (string) será chamada a função main()*/
while ((leitura = gets()) !== "") main(leitura);

function main(str) {
    /*A função verificarCaracter() receberá a string em array (str.split(''))
    e a mesma string em formato original (str)*/
    saida = verificarCaracter(str.split(''), str);
    for (index = saida.length - 1; index >= 0; index--) console.log(saida[index]);
}

function verificarCaracter(arrCaracter, strOriginal) {
    strSaida = [];
    strNaoRepetida = -1;
    /*o array 'arrCaracter' será armazenado em outro array, porem terá uma posição a menos.
    Alem disso o tamanho do array 'arrCaracter' -1, será armazedo na variavel i, para ser 
    usado para capturar a subtring da string original 'strOriginal'*/
    procura = arrCaracter[i = arrCaracter.length - 1];
    //No 'while' será comparado um caracter por vez, a leitura será feita em ordem decrescente
    while (true) {
        if ((i - procura.length) >= 0) {
            /*strOriginal.substring(i - procura.length, i): será capturado apenas um caracter, começando 
            na posição decrescente, e será comparando com o caracter que esta na variavel 'procura' */
            /*se a condição for verdadeira, será armazendo no array 'strSaida', a substring que foi localizada*/
            if ((strOriginal.substring(i - procura.length, i)) == procura) strSaida.push(strOriginal.substring(0, strNaoRepetida = i));
            /*a varivel 'i' tera decremento, e enquanto a variavel 'i' for maior que 0,
            será armazendo na variavel 'procura' o valor do array 'arrCaracter[i]' + 'procura'*/
            if (i-- >= 0) procura = arrCaracter[i] + procura;
        } else {
            //Se a condição acima nao for verificada, o 'while', será interrompido com um 'break'.
            break;
        }
    }
    /*Se nenhuma condição dentro do while, ocorrer, então a string nao tem palavra repetida,
    será armazenado na 'strSaida' a string original*/
    if (strNaoRepetida == -1) strSaida.push(strOriginal);

    return strSaida;
}