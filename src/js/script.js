//DECLARAÇÕES DOS ELEMENTOS
const videoElemento = document.getElementById("video");
const botaoScanear = document.getElementById("btn-texto");
const resultado = document.getElementById("saida");
const canvas = document.getElementById("canvas");


// Método Habilitar Câmera

async function configurarCamera(){
    try{
        const midia = await navigator.mediaDevices.getUserMedia({
            video: {facingMode: "environment"},
            audio: false
        });
        videoElemento.srcObject = midia;
        videoElemento.onplay();

    }catch(erro){
        resultado.innerText="Erro ao acessar a câmera",erro;
    }
}
