function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', '/assets/img/bebeM.png')
            } else if(idade < 21){
                img.setAttribute('src', '/assets/img/adolescente.png')

            }else if(idade < 50){
             img.setAttribute('src', '/assets/img/jovem.png')

            }else {
                img.setAttribute('src', '/assets/img/idoso.png')

            }
        }else if (fsex[1].checked){
            genero = "Mulher"
            if(idade >=0 && idade < 10){
                img.src = '/assets/img/bebeW.png'
            } else if(idade < 21){
                img.setAttribute('src', '/assets/img/adolescenteW.png')

            }else if(idade < 50){
                img.setAttribute('src', '/assets/img/jovemW.png')

            }else {
                img.setAttribute('src', '/assets/img/idosa.png')

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos.`
        res.appendChild(img)

    }
}


