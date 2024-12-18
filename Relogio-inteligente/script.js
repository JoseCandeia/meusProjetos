function carregar(){
    var msg =window.document.getElementById('msg')
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora <12){
        img.src ='manha.png'
        //bom dia
        document.body.style.background ='#fde666 '
    } else if(hora >= 12 && hora <=18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background ='#eb9e5a'
    }else{
        //boa noite
        img.src ='noite.png'
        document.body.style.background ='#0a181b'
    }
}
