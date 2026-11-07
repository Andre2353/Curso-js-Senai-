// const paragrafo = document.getElementById("Paragrafo")
// const paragrafo2 = document.getElementById("Paragrafo2")
// const paragrafo3 = document.getElementById("Paragrafo2")
// const paragrafo4 = document.getElementById("Paragrafo2")

// console.log(paragrafo);
// console.log(paragrafo2);
// console.log(paragrafo3);
// console.log(paragrafo4);


// const title = document.getElementById("title")
// const dada = document.getElementById("dada")

// title.innerText = "Troquei"
// dada.innerText = "colocando outro titulo "
// dada.style.color = "green"
// dada.style.fontSize = "90px"
// dada.style.backgroundColor = "aqua"

// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     paragrafo.innerText= "você vai para o inferno de !!!"
//     paragrafo.style.color = "red"
//     paragrafo.style.backgroundColor = "black"
    
// })
const paragrafo = document.getElementById("paragrafo")
const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    paragrafo.innerText = "alterado com sucesso"
    paragrafo.style.fontSize = "50px"
    paragrafo.style.color = "red"
    paragrafo.style.backgroundColor = "black"
})