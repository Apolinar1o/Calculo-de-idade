function VERIFICAR(ano_atual, ano){

    if (ano.value.length == 0){
        alert("Digite um numero porfavor")
    } else if (Number(ano.value) > ano_atual) {
        alert("[ERRO] Digite um ano correto" )
    } else {
        var conta =  ano_atual - Number(ano.value) 
        res.innerHTML = `Você tem ${conta} anos`
    }
    return conta
}
function ANO(){
    var res = document.getElementById("res")
    var agora = new Date()
    VERIFICAR(agora.getFullYear(), ano)

    
}