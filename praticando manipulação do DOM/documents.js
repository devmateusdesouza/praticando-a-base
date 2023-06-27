document.getElementById("para1").style.color = "purple"
document.getElementById("para1").style.fontSize = "32px"
document.getElementById("app").style.border = "1px solid black"
document.querySelector("#app").style.color = "purple"
document.querySelector("#app").style.width = "300px"
document.querySelector("#app").style.backgroundColor = "rgb(175, 175, 255)"

function trocardecor(novacor){
    var elemento = document.getElementById("para1");
    elemento.style.color = novacor;
}

function trocarfundo(novofundo){
    var elemento1 = document.getElementById("para1")
    elemento1.style.backgroundColor = novofundo
}

function trocartexto(){
    var novotexto = document.getElementById("input-text").value
    var res = document.getElementById("para1")
    res.innerHTML= novotexto
}

function trocar_pesofonte(novopesofonte){
    var elemento2 = document.getElementById("para1")
    elemento2.style.fontWeight = novopesofonte
}

function trocar_tamanhofonte(novotamanhofonte){
    var elemento3 = document.getElementById("para1")
    elemento3.style.fontSize = novotamanhofonte
}