function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('#res');

    if(fano.value.length == 0 || Number (fano.value > ano)){
        alert('[ERRO] verifique os dados novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked) {
            genero = "Masculino"

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'foto-bebe-h.png')
            } else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-h.png')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-h.png')
            }else {
                img.setAttribute('src', 'foto-idoso-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `seu genero e ${genero} e sua idade e ${idade}`
        res.appendChild(img)
        
    }
    
    
}