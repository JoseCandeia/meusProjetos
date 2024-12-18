function verificar() {

    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] Verifique os Dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');// para pegar o radio
        var idade = ano - Number(fano.value);
        var genero =''
        var img = document.createElement('img') // cria um elemento do tipo css
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <=13){
                img.setAttribute('src','crianca_homen.png')
            }else if(idade <=21){
                img.setAttribute('src','jovem_homem.png')
            }else if(
                idade <50){
                    img.setAttribute('src','homen_adulto.png')
            }else{
                img.setAttribute('src','idoso.png')
            }
        }else if (fsex[1].checked){

            genero = 'mulher'
            if(idade >=0 && idade <=13){
                img.setAttribute('src','crianca_menina.png')
            }else if(idade <=21){
                img.setAttribute('src','jovem_mulher.png')
            }else if(
                idade <50){
                    img.setAttribute('src','mulher_adulta.png')
            }else{
                img.setAttribute('src','idosa.png')// para pega algo tipo cs
            }
        }
        res.style.textAlign='center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
     
    }
}
