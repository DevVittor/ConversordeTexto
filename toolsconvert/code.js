let ocultarBTN = document.querySelector('#copiar').style.display = 'none';
let conteudo = document.getElementById('conteudoTxt').value;

//Texto fica normal
document.getElementById('none').addEventListener("click",()=>{
    ocultarBTN = document.querySelector('#copiar').style.display = 'flex';
    document.getElementById("conteudoTxt").style.textTransform = "none";
    //Função de de botão de copiar
    document.getElementById("copiar").addEventListener("click", ()=>{
        document.getElementById('conteudoTxt').select();
        document.execCommand('copy');
    })
})
//Texto fica tudo em Máiusculo 
document.getElementById("uppercase").addEventListener("click", ()=>{
    ocultarBTN = document.querySelector('#copiar').style.display = 'flex';
    document.getElementById("conteudoTxt").style.textTransform = "uppercase";
    //Função de de botão de copiar
    document.getElementById("copiar").addEventListener("click", ()=>{
        document.getElementById('conteudoTxt').select();
        document.execCommand('copy');
    })
})
//Texto fica tudo em Minúsculo 
document.getElementById("lowercase").addEventListener("click", ()=>{
    ocultarBTN = document.querySelector('#copiar').style.display = 'flex';
    document.getElementById("conteudoTxt").style.textTransform = "lowercase";
    //Função de de botão de copiar
    document.getElementById("copiar").addEventListener("click", ()=>{
        document.getElementById('conteudoTxt').select();
        document.execCommand('copy');
    })
})
//Texto fica tudo em Capitalize 
document.getElementById("capitalize").addEventListener("click", ()=>{
    ocultarBTN = document.querySelector('#copiar').style.display = 'flex';
    document.getElementById("conteudoTxt").style.textTransform = "capitalize";
    //Função de de botão de copiar
    document.getElementById("copiar").addEventListener("click", ()=>{
        document.getElementById('conteudoTxt').select();
        document.execCommand('copy');
    })
})