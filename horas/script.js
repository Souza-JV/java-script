function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#c6b5a4'
        
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e7cea4'
    } else {
        //Boa noite
        img.src = 'imagens/noite.png';
        document.body.style.background = '#0f2135'
    }
}
