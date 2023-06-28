        
var i=1
function verificar(){
    var txtimg = document.getElementById('img').src
    console.log(txtimg)
    var txtimgs = txtimg.slice(66,-4) //no servidor podem ser outros números, depende do tamanho do caminho
        //no computador é (70,-4) no github é (66, -4)
    console.log(txtimgs)
    var palavra = document.getElementById('input-text').value

    if(txtimgs==palavra){
        document.getElementById("text_confirmation").style.color = 'green'
        document.getElementById("text_confirmation").innerHTML='  Acertou'

        var names = ['img/officer.jpg' ,'img/dentist.jpg' , 'img/doctor.jpg', 'img/fireman.jpg' , 'img/teacher.jpg']

        function newimage(){
            document.getElementById('img').src = names[i]
            document.getElementById('input-text').value = ''
            document.getElementById("text_confirmation").innerHTML = ''
            i= i+1
        }
        setTimeout(newimage, 1000)

    }else{
        document.getElementById("text_confirmation").style.color = 'red'
        document.getElementById("text_confirmation").innerHTML='Errou'
    }
    
}

