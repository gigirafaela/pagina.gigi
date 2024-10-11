function criaCartao (categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    
    console.log(container)
    
    cartao.className = 'cartao'
    
    console.log(cartao)

    cartao.innerHTML = `  
        <div class="cartao__conteudo">
            <h3> ${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p> ${pergunta}</p>
            </div>                        
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
`

    let respostaEstavisivel = false
    function viraCartão() {
        respostaEstavisivel = !respostaEstavisivel
        cartao.classList.toggle('active', respostaEstavisivel)
    }
    cartao.addEventListener('click', viraCartão)

    container.appendChild(cartao)
    
 }