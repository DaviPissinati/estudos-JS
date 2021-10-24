function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    // var hora = data.getHours();
    var hora = 3
    msg.innerHTML = `Agora São ${hora} horas.`

    if(hora >= 6 && hora < 12){
        img.src = "fotomanha.png"
        document.body.style.background = '#efdabf'
    }
    else if(hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#f1a365'
    }
    else if (hora >= 18 && hora <= 24) {
        img.src = "fotonoite.png"
        document.body.style.background = '#48505a'
    }
    else{
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#181a29'
    }
    
}