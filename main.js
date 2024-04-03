function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length;) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio)
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
    tecla.onkeydown = function (evento){
        console.log(evento.code);
        if (evento.code == 'Space'|| evento.code =='Enter'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (evento){
        if(evento.code == 'Space'|| evento.code =='Enter') {
        tecla.classList.remove('ativa');
        }
    }
}