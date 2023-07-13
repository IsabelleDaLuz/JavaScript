function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente[ERRO]')
    } else {
        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex.checked) {
           var genero = 'Homem'
           if (idade >= 0 && idade < 12) {
            // Crianca
            img.setAttribute('src', 'crianca-m.jpg')
           } else if (idade < 18) {
             // Jovem
            img.setAttribute('src', 'jovem-m.jpg')
           } else if (idade < 60) {
             // Adulto
             img.setAttribute('src', 'adulto-m.jpg')
           } else {
            // Idoso
            img.setAttribute('src', 'idoso-m.jpg')
           }
        } else {
            var genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Crianca
                img.setAttribute('src', 'crianca-f.jpg')
               } else if (idade < 18) {
                 // Jovem
                img.setAttribute('src', 'jovem-f.jpg')
               } else if (idade < 60) {
                 // Adulto
                 img.setAttribute('src', 'adulto-f.jpg')
               } else {
                // Idoso
                img.setAttribute('src', 'idoso-f.jpg')
               }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma ${genero} de ${idade} anos`
        res.appendChild(img)
    }
   
}
 