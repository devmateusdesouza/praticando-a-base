/* const candidato = [
    {
        number: 1,
        nome: "Mateus" ,
        sobrenome: "Santos",
    }
    {
        number: 2,
        nome: "Mário" ,
        sobrenome: "Farias",
    }
    {
        number: 3,
        nome: "Rafael" ,
        sobrenome: "Pozinatto",
    }
] */

var number = [1,2,3,4]
var nome = ["Mateus", "Mario","Rafael","Italo"]
var sobrenome = ["Santos","Farias","Pozinatto", "Padua"]

for(i=0 ; i<number.length ; i++){
    console.log(`Seu nome é ${nome[i]} ${sobrenome[i]} e você é o candidato número ${number[i]}`)
}


function somar(x,y){
    soma = x+y
    console.log(soma)
}

somar(5,9)