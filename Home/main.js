var buscar = document.querySelector('.pesquisar');
var barra_de_pesquisaa = document.querySelector('.barra_de_pesquisa');
var input_barra = document.querySelector('.barra_pesquisa');
var mainn = document.querySelector('main');
var var_barra = 0;

buscar.addEventListener('click', function(){

    if(var_barra === 0){
        barra_de_pesquisaa.style.marginTop = "0";
        barra_de_pesquisaa.style.transition = 'margin-top 1.6s ease';
        mainn.style.height = "152vh";

        var_barra = 1;

    } else if (var_barra === 1){
        barra_de_pesquisaa.style.marginTop = "-12vh";
        barra_de_pesquisaa.style.transition = 'margin-top 1.6s ease';
        mainn.style.height = "144vh";
        input_barra.value = '';

        var_barra = 0;
    }
})

var mus = document.querySelector('audio');
mus.volume = 0.4;

var play = document.querySelector('#img_controler_play');
var isPlaying = false;

play.addEventListener('click', function(){
    if (isPlaying) {
        mus.pause();
        play.setAttribute('src', '../Imagens/Play.png');
        isPlaying = false;

    } else {
        mus.play();
        play.setAttribute('src', '../Imagens/Pause.png');
        isPlaying = true;
    }
});

var volume = document.querySelector('.img_volume');
var withVol = false;

volume.addEventListener('click', function(){
    if(withVol) {
        mus.volume = 0;
        volume.setAttribute('src', '../Imagens/Icon-Vol Mutado.png')
        withVol = false;

    } else {
        mus.volume = 0.4;
        volume.setAttribute('src', '../Imagens/Volume.png')
        withVol = true;
    }
})

var Passar_direitoo = document.querySelector('#Passar_direito');
var Img_mus = document.querySelector('.img_mus_esc');
var Texto = document.querySelector('.text_mus_escutada');
var var_texto = 0;

Passar_direitoo.addEventListener('click', function(){
    if(var_texto === 0){

        if(play.setAttribute('src', '../Imagens/Pause.png')){
            play.setAttribute('src', '../Imagens/Play.png');
        }

        Texto.textContent = "C'EST LA VIE - Kayblack";
        Img_mus.setAttribute('src', '../Imagens/Contradições Kayblack.png')

        mus.setAttribute('src',"../Músicas/Kayblack  '- CEST LA VIE.mp3'");
        mus.play();

        var_texto = 1;
    }

    else if(var_texto === 1){

        if(play.setAttribute('src', '../Imagens/Pause.png')){
            play.setAttribute('src', '../Imagens/Play.png');
        }

        Texto.textContent = "Mustang Preto - Teto";
        Img_mus.setAttribute('src', '../Imagens/Mustang Preto - Teto.jpg')

        mus.setAttribute('src', '../Músicas/TETO - Mustang Preto.mp3');
        mus.play();

        var_texto = 2;
    }
})

var Passar_esquerdoo = document.querySelector('#Passar_esquerdo');

Passar_esquerdoo.addEventListener('click', function(){
    if(var_texto === 2){

        if(play.setAttribute('src', '../Imagens/Pause.png')){
            play.setAttribute('src', '../Imagens/Play.png');
        }

        Texto.textContent = "C'EST LA VIE - Kayblack";
        Img_mus.setAttribute('src', '../Imagens/Contradições Kayblack.png')

        mus.setAttribute('src', '../Músicas/Kayblack - CEST LA VIE.mp3');
        mus.play();

        var_texto = 1;
    }

    else if(var_texto === 1){

        if(play.setAttribute('src', '../Imagens/Pause.png')){
            play.setAttribute('src', '../Imagens/Play.png');
        }

        Texto.textContent = "Novo Balanço - Veigh";
        Img_mus.setAttribute('src', '../Imagens/Novo Balanço Veigh.png')

        mus.setAttribute('src', '../Músicas/VEIGH - Novo Balanço.mp3');
        mus.play();

        var_texto = 0;
    }
})

var Repetir_musica = document.querySelector('#repetir_mus');
var Rep_mus = false;

Repetir_musica.addEventListener('click', function(){

    if(Rep_mus){
        Repetir_musica.setAttribute('src', '../Imagens/Icon Repetição.png')
        Rep_mus = false;

    }else{
        Repetir_musica.setAttribute('src', '../Imagens/Icon Repetição Desativado.png')
        Rep_mus = true;
    }

})

var Coracao = document.querySelector('#coracao');
var coracao_preechido = false;

Coracao.addEventListener('click', function(){

    if(coracao_preechido){
        Coracao.setAttribute('src', '../Imagens/Coração.png')
        coracao_preechido = false;

    }else{
        Coracao.setAttribute('src', '../Imagens/Coração Preenchido.png')
        coracao_preechido = true;
    }
})