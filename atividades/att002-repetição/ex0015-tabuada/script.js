function enviar() {
    let n = +document.querySelector('#n').value
    let res = document.querySelector('#res')

    if (!n) {
        alert('[Erro] Numero invalido')
        res.innerHTML = 'Numero invalido'
        return
    } else {
        res.innerHTML = `A tabuada de ${n} é: <br>`
        for(let c = 1; c <= 10; c++){
            res.innerHTML += `${n}x${c}=${n * c} <br>`
        }
    }
}