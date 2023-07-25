var mus = document.querySelector('audio');
mus.volume = 0.4;

var play = document.querySelector('#img_controler_play');
var mus_escutando = document.querySelector('.img_escutando_mus');
var isPlaying = false;

play.addEventListener('click', function(){
    if (isPlaying) {
        mus.pause();
        play.setAttribute('src', '../../Imagens/Play.png');
        if(var_texto === 0){
            mus_wiu.setAttribute('src', '')
            
        } else if(var_texto === 1){
            mus_teto_mp.setAttribute('src', '')

        } else if(var_texto === 2){
            mus_teto_mvf.setAttribute('src', '')
            
        } else if(var_texto === 3){
            mus_kay.setAttribute('src', '')
            
        } else if(var_texto === 4){
            mus_veigh.setAttribute('src', '')
            
        }

        isPlaying = false;

    } else {
        mus.muted = false;
        mus.play();
        play.setAttribute('src', '../../Imagens/Pause.png');

        if(var_texto === 0){
            mus_wiu.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')
            
        } else if(var_texto === 1){
            mus_teto_mp.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')

        } else if(var_texto === 2){
            mus_teto_mvf.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')
            
        } else if(var_texto === 3){
            mus_kay.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')
            
        } else if(var_texto === 4){
            mus_veigh.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')
            
        }

        isPlaying = true;
    }
});

var volume = document.querySelector('.img_volume');
var withVol = false

volume.addEventListener('click', function(){
    if(withVol) {
        mus.volume = 0;
        volume.setAttribute('src', '../../Imagens/Icon-Vol Mutado.png')
        withVol = false;

    } else {
        mus.volume = 0.4;
        volume.setAttribute('src', '../../Imagens/Volume.png')
        withVol = true;
    }
})

var Passar_direitoo = document.querySelector('#Passar_direito');
var capa_album = document.querySelector('#capa_album');
var mus_wiu = document.querySelector('#mus_wiu');
var mus_teto_mp = document.querySelector('#mus_teto_mp');
var mus_teto_mvf = document.querySelector('#mus_teto_mvf');
var mus_kay = document.querySelector('#mus_kay');
var mus_veigh = document.querySelector('#mus_veigh');
var var_texto = 0;

Passar_direitoo.addEventListener('click', function(){
    if(var_texto === 0){

        if(play.setAttribute('src', '../../Imagens/Pause.png')){
            play.setAttribute('src', '../../Imagens/Play.png');
        }

        capa_album.setAttribute('src', '../../Imagens/Mustang Preto - Teto.jpg')

        mus_teto_mp.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')

        mus_wiu.setAttribute('src', '');

        mus.setAttribute('src', '../../Músicas/TETO - Mustang Preto.mp3');
        mus.play();

        var_texto = 1;
    }

    else if(var_texto === 1){

        if(play.setAttribute('src', '../../Imagens/Pause.png')){
            play.setAttribute('src', '../../Imagens/Play.png');
        }

        capa_album.setAttribute('src', '../../Imagens/Minha Vida é um Filme Teto.jpg')

        mus_teto_mvf.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')

        mus_teto_mp.setAttribute('src', '');

        mus.setAttribute('src', '../../Músicas/Teto - Minha Vida é um Filme.mp3');
        mus.play();

        var_texto = 2;
    }

    else if(var_texto === 2){

        if(play.setAttribute('src', '../../Imagens/Pause.png')){
            play.setAttribute('src', '../../Imagens/Play.png');
        }

        capa_album.setAttribute('src', '../../Imagens/Contradições Kayblack.png')

        mus_kay.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')

        mus_teto_mvf.setAttribute('src', '');

        mus.setAttribute('src', '../../Músicas/Kayblack - CEST LA VIE.mp3');
        mus.play();

        var_texto = 3;
    }

    else if(var_texto === 3){

        if(play.setAttribute('src', '../../Imagens/Pause.png')){
            play.setAttribute('src', '../../Imagens/Play.png');
        }

        capa_album.setAttribute('src', '../../Imagens/Novo Balanço Veigh.png')

        mus_veigh.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')

        mus_kay.setAttribute('src', '');

        mus.setAttribute('src', '../../Músicas/VEIGH - Novo Balanço.mp3');
        mus.play();

        var_texto = 4;
    }
})

var Passar_esquerdoo = document.querySelector('#Passar_esquerdo');

Passar_esquerdoo.addEventListener('click', function(){
    
    if(var_texto === 4){

        if(play.setAttribute('src', '../../Imagens/Pause.png')){
            play.setAttribute('src', '../../Imagens/Play.png');
        }

        capa_album.setAttribute('src', '../../Imagens/Contradições Kayblack.png')

        mus_kay.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')

        mus_veigh.setAttribute('src', '');

        mus.setAttribute('src', '../../Músicas/Kayblack - CEST LA VIE.mp3');
        mus.play();

        var_texto = 3;
    }

    else if(var_texto === 3){

        if(play.setAttribute('src', '../../Imagens/Pause.png')){
            play.setAttribute('src', '../../Imagens/Play.png');
        }

        capa_album.setAttribute('src', '../../Imagens/Minha Vida é um Filme Teto.jpg')

        mus_teto_mvf.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')

        mus_kay.setAttribute('src', '');

        mus.setAttribute('src', '../../Músicas/Teto - Minha Vida é um Filme.mp3');
        mus.play();

        var_texto = 2;
    }
    
    else if(var_texto === 2){

        if(play.setAttribute('src', '../../Imagens/Pause.png')){
            play.setAttribute('src', '../../Imagens/Play.png');
        }

        capa_album.setAttribute('src', '../../Imagens/Mustang Preto - Teto.jpg')

        mus_teto_mp.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')

        mus_teto_mvf.setAttribute('src', '');

        mus.setAttribute('src', '../../Músicas/TETO - Mustang Preto.mp3');
        mus.play();

        var_texto = 1;
    }

    else if(var_texto === 1){

        if(play.setAttribute('src', '../../Imagens/Pause.png')){
            play.setAttribute('src', '../../Imagens/Play.png');
        }

        capa_album.setAttribute('src', '../../Imagens/Manual de Como Amar Errado Wiu.jpg')

        mus_wiu.setAttribute('src', '../../Imagens/Icon Escutando Musica.png')

        mus_teto_mp.setAttribute('src', '');

        mus.setAttribute('src', '../../Músicas/WIU - Coração de Gelo.mp3');
        mus.play();

        var_texto = 0;
    }
})

var Repetir_musica = document.querySelector('#repetir_mus');
var Rep_mus = false;

Repetir_musica.addEventListener('click', function(){

    if(Rep_mus){
        Repetir_musica.setAttribute('src', '../../Imagens/Icon Repetição.png')
        Rep_mus = false;

    }else{
        Repetir_musica.setAttribute('src', '../../Imagens/Icon Repetição Desativado.png')
        Rep_mus = true;
    }

})

var Coracao = document.querySelector('#coracao');
var coracao_preechido = false;

Coracao.addEventListener('click', function(){

    if(coracao_preechido){
        Coracao.setAttribute('src', '../../Imagens/Coração.png')
        coracao_preechido = false;

    }else{
        Coracao.setAttribute('src', '../../Imagens/Coração Preenchido.png')
        coracao_preechido = true;
    }

})