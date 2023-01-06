function CALCULAR(conta){
    var res = document.getElementById("res")
    var agora = new Date()
    var Ano_atual = agora.getFullYear()
    if (ano.value.length == 0){
        alert("Digite um numero porfavor")
    } else if (Number(ano.value) > Ano_atual) {
        alert("[ERRO] Digite um ano correto" )
    } else {
        var conta =  Ano_atual - Number(ano.value) 
        res.innerHTML = `Você tem ${conta} anos`
    }
}