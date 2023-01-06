function VERIFICAR2(mes_atual, mes){
    if (mes_atual-mes < 0) {
        qtd_mes = 12-mes+1
        console.log(`Você tem ${qtd_mes} meses` )
        
        
    } else {
        qtd_mes = mes_atual - mes +1
        console.log(`Você tem ${qtd_mes} meses` )
    }
    return mes_atual
}
function MESES(mes_atual, mes){
    var verifi = VERIFICAR2(mes_atual, mes)
    return verifi
}
var agora = new Date()
console.log(MESES(agora.getMonth(), 2))