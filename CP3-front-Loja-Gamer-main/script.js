let imagens=['./imagens/imagem1-lojagamer.jpg','./imagens/imagem2-lojagamer.jpg','./imagens/imagem3-lojagamer.jpg','./imagens/imagem4-lojagamer.jpg','./imagens/imagem6-lojagamer.jpg','./imagens/imagem7-lojagamer.jpg','./imagens/imagem8-lojagamer.jpg'];
let index=0;
let time=3000;


function slideShow(){

    document.getElementById("imgbanner").src=imagens[index];
    index++;
    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()',time)
}
slideShow();