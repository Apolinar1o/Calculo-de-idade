function VERIFICAR_ANO(ano_atual, ano, mes_atual, mes, dia, dia_atual){

    if (ano.value.length == 0 || Number(ano.value)<0 || Number(ano.value) > ano_atual){
        alert("[ERRO] Digite o campo do ANO correto porfavor")
        location.reload();
    }  else if ((mes_atual == Number(mes.value)+1))  {
        var conta =  ano_atual - Number(ano.value)
        res.innerHTML = `Você tem ${conta} anos`
    }  else if (mes_atual < Number(mes.value) || (dia_atual <  Number(dia.value) && mes_atual== Number(mes.value)) )  {
        var conta =  ano_atual - Number(ano.value)-1
        if (conta ==1 ) {
            res.innerHTML = `Você tem ${conta+1} ano`
        } else {
            res.innerHTML = `Você tem ${conta} anos`

        }
    }    else {
        var conta =  ano_atual - Number(ano.value) 
        res.innerHTML = `Você tem ${conta} anos`
    }
        return conta
}

function VERIFICAR_MES(mes_atual, mes, dia, dia_atual){
    if (mes.value.length == 0 || Number(mes.value)<1 || Number(mes.value) >12 || mes_atual){
        alert("[ERRO] Digite o campo do MÊS correto porfavor")
        location.reload();
    } else if (mes_atual -Number(mes.value)+1 < 0) {
        qtd_mes = 12-Number(mes.value)+1
        if (qtd_mes ==12 && dia >dia_atual && mes == mes_atual) {
            res.innerHTML += (`` )
        } else

        res.innerHTML += (`, ${qtd_mes-1} meses` )

    } else {
        qtd_mes = mes_atual - Number(mes.value) +1
        if (qtd_mes ==0) {
            res.innerHTML += (``)
        } else

        res.innerHTML += (`, ${qtd_mes-1} meses` )

    }
        
    

    
    return mes_atual, mes, qtd_mes
}
function VERIFICAR_DIA(dia_atual, dia, mes) {
    if(dia.value.length == 0 || Number(mes.value)<1 || Number(mes.value) >31){
        alert("[ERRO] Digite o campo do DIA correto porfavor")
        location.reload();
    } else if (Number(mes.value) == 1 || Number(mes.value) == 3 || Number(mes.value) == 5 || Number(mes.value) ==7 || Number(mes.value) ==8 || Number(mes.value) == 10 || Number(mes.value) == 12) {
        var calc = (31-Number(dia.value))+ dia_atual
        if (calc == 32) {
            res.innerHTML += ` e 1 dia`
        } else {
            var calc = (31-Number(dia.value)+ dia_atual)
            res.innerHTML += ` e ${calc} dias`
        }
    } else if (Number(mes.value)==4 || Number(mes.value) == 6 || Number(mes.value) == 9 || Number(mes.value) == 11){
        var calc = (30-Number(dia.value))+ dia_atual+1
        res.innerHTML += ` e ${calc} dias`
       
    } else {
        var calc = (28-Number(dia.value))+ dia_atual
        res.innerHTML += ` e ${calc} dias`
        

    }
}

    

function ANO(){
    var res = document.getElementById("res")
    var agora = new Date()
    res.innerHTML = ""
    VERIFICAR_ANO(agora.getFullYear(), ano, agora.getMonth(), mes)
    VERIFICAR_MES(agora.getMonth(), mes)
    VERIFICAR_DIA(agora.getDate(), dia, mes)
    
}












