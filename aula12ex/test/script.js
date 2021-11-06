// function verificar() {
//     var data = new Date();
//     var ano = data.getFullYear();
//     var fano = document.getElementById('txtano');
//     var res = document.querySelector('#res');

//     if(fano.value.length == 0 || Number (fano.value > ano)){
//         alert('[ERRO] verifique os dados novamente')
//     }else {
//         var fsex = document.getElementsByName('radsex')
//         var idade = ano - Number(fano.value)
//         var genero = ""
//         var img = document.createElement('img')
//         img.setAttribute('id' , 'foto')
//         img.style.height = "250px"
//         img.style.width = "250px"
        
//         if (fsex[0].checked) {
//             genero = "Masculino"

//             if (idade >= 0 && idade <= 10) {
//                 img.setAttribute('src', 'foto-bebe-h.png')
//             } else if(idade < 21){
//                 img.setAttribute('src', 'foto-jovem-h.png')
//             }else if(idade < 50){
//                 img.setAttribute('src', 'foto-adulto-h.png')
//             }else {
//                 img.setAttribute('src', 'foto-idoso-h.png')
//             }
//         } else if (fsex[1].checked) {
//             genero = 'feminino'

//             if (idade >= 0 && idade <= 10) {
//                 img.setAttribute('src', 'foto-bebe-m.png')
//             } else if(idade < 21){
//                 img.setAttribute('src', 'foto-jovem-m.png')
//             }else if(idade < 50){
//                 img.setAttribute('src', 'foto-adulta-m.png')
//             }else {
//                 img.setAttribute('src', 'foto-idosa-m.png')
//             }

//         }
        
//         res.style.textAlign = 'center'
//         res.style.flexDirection = 'column'
//         res.style.display = 'flex'
//         res.innerHTML = `seu genero e ${genero} e sua idade e ${idade}`
//         res.appendChild(img)
        
//     }
    
    
// }

function acharJogo() {
    
    
    var nomeJogo = document.getElementById('src');
    var idjogo = document.querySelector('#jogo');
    var jogo = nomeJogo.value 

    


    if (jogo == '') {
        alert("coloque um nome")
    }else if (jogo){  
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        img.style.height = "250px"
        img.style.width = "250px"

        if (jogo == 'Skyrim') {
            img.setAttribute('src', 'skyrim.jpeg')
        } else if (jogo == 'borderlands') {
            img.setAttribute('src', 'borderlands-1.jpeg')
        } else if (jogo == 'borderlands 2') {
            img.setAttribute('src', 'borderlands-2.jpeg')
        } else if (jogo == 'borderlands3') {
            img.setAttribute('src', 'borderlands-3.jpeg')
        } else if (jogo == 'dont starve') {
            img.setAttribute('src', 'dont-starve.jpeg')
        }else{
            if (jogo == true) {
                idjogo.innerHTML = `seu jogo e <strong>${jogo}</strong>`
            }else{
                idjogo.innerHTML = `seu jogo não foi encontrado:<strong>${jogo}</strong>`
                img.setAttribute('src','nao-encontrado.jpeg')
            }

        }

        idjogo.style.alignItems = 'center'
        idjogo.style.flexDirection = 'column'
        idjogo.style.display = 'flex'
        idjogo.appendChild(img)

    }
}