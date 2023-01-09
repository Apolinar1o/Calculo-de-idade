function VERIFICAR_ANO(ano_atual, ano, mes_atual, mes){

    if (ano.value.length == 0 || Number(ano.value)<0 || Number(ano.value) > ano_atual){
        alert("[ERRO] Digite os campos corretos porfavor")
        location.reload();
    }  else if ((mes_atual == Number(mes.value))+1)  {
        var conta =  ano_atual - Number(ano.value)
        res.innerHTML = `Você tem ${conta} anos`
    }  else if (mes_atual < Number(mes.value))  {
        var conta =  ano_atual - Number(ano.value)-1
        res.innerHTML = `Você tem ${conta} anos`
    }    else {
        var conta =  ano_atual - Number(ano.value) 
        res.innerHTML = `Você tem ${conta} anos`
    }
    
    return conta
}

function VERIFICAR_MES(mes_atual, mes){
    if (mes.value.length == 0 || Number(mes.value)<1 || Number(mes.value) >12 || mes_atual){
        alert("[ERRO] Digite os campos corretos porfavor")
        location.reload();
    } else if (mes_atual-Number(mes.value) < 0) {
        qtd_mes = 12-Number(mes.value)+1
        if (qtd_mes ==12) {
            res.innerHTML += (`, 0 meses` )
        } else

        res.innerHTML += (`, ${qtd_mes} meses` )

    } else {
        qtd_mes = mes_atual - mes +1
        res.innerHTML += (`, ${qtd_mes} meses` )
    }

    
    return mes_atual, mes, qtd_mes
}

    

function ANO(){
    var res = document.getElementById("res")
    var agora = new Date()
    res.innerHTML = ""
    VERIFICAR_ANO(agora.getFullYear(), ano, agora.getMonth(), mes)
    VERIFICAR_MES(agora.getMonth(), mes)
    
    
}












