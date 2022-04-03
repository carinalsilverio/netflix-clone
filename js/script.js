let botao = document.getElementById("btn-pergunta")
let menu = document.getElementById("pergunta")
let imagem = document.getElementById("img-fechar")


function dropdown() {
    if (menu.style.display == "none") {
        menu.style.display ="block"
        imagem.id ="img-fechar-girar"
    } else {
        menu.style.display ="none"
        imagem.id = "img-fechar"
    }
    
}
botao.addEventListener("click", dropdown)
