
function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0  || passo.value.length == 0 ) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Invalido! Considerando Passo: 1')
            p = 1
        }
    }

    if (i < f) { // Contagem crescente
        for (var c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
        }
    } else { // Contagem decrescente
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
    }
    res.innerHTML += `\u{1F3C1}`
}

function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tabuada');
    if (num == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        var n = 5
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
          //  var r = n * c
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
    
}