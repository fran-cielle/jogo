function jogo(numeroGerado, resposta){
    const numeroFormatado = parseInt(resposta)
    if (Number.isNaN(numeroFormatado)) {
        return { mensagemErro: 'Não é um número válido' }
      }
    if (numeroGerado > resposta){
        return  resultado = {
            "acertou": false,
            "mensagemErro": 'Tente um número maior!'
        }
    }else if (numeroGerado < resposta){
        return  resultado = {
            "acertou": false,
            "mensagemErro": 'Tente um número menor!'
        }
    }else if (numeroGerado == resposta){
        return  resultado = {
            "acertou": true,
            "mensagemErro": 'não há'
        }
    }   
}

module.exports =  jogo
