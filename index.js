function calcularSaldo(win,lose){

    return win - lose

}

  //heroi = Vítorias, Derrotas, Saldo, Nível
let heroi = [0, 0, 0, "nível"]
let i,j

//Vitoria; Derrota
heroi[0]= 370; heroi[1]= 370
heroi[2]= calcularSaldo(heroi[0], heroi[1])


if(heroi[2] <= 10){

    heroi[3] = "Ferro"

}else if( heroi[2] >= 11 && heroi[2] <= 20 ){

    heroi[3] = "Bronze"

}else if( heroi[2] >= 21 && heroi[2] <= 50 ){

    heroi[3] = "Prata"

}else if( heroi[2] >= 51 && heroi[2] <= 80 ){

    heroi[3] = "Ouro"

}else if( heroi[2] >= 81 && heroi[2] <= 90 ){

    heroi[3] = "Diamante"

}else if( heroi[2] >= 91 && heroi[2] <= 100){

    heroi[3] = "Lendario"

}else if( heroi[2] >= 101){

    heroi[3] = "Imortal"

}else{

    console.log("Numero invalido")

}

console.log("O Herói tem de saldo de " + heroi[2] + " e está no nível de " + heroi[3])





