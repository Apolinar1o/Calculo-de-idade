function VERIFICAR_ANO(ano_atual, ano, mes_atual, mes, dia, dia_atual){

    if (ano.value.length == 0 || Number(ano.value)<0 || Number(ano.value) > ano_atual || (Number(ano.value)>= ano_atual && Number(mes.value) >= mes_atual+1 && Number(dia.value) > dia_atual) || Number(ano.value) <1900){
        alert("[ERRO] Digite o campo do ANO correto porfavor")
        location.reload();
    }  else if ((mes_atual == Number(mes.value)+1))  {
        var conta =  ano_atual - Number(ano.value)
        res.innerHTML = `Você tem ${conta} anos`
    }  else if (mes_atual+1 < Number(mes.value) || (dia_atual <  Number(dia.value) && mes_atual+1 == Number(mes.value)) )  {
            var conta =  ano_atual - Number(ano.value)-1
         
        if (conta ==1 ) {
            res.innerHTML = `Você tem ${conta} ano`
        } else {
            res.innerHTML = `Você tem ${conta} anos`

        }
    }    else {
        var conta =  ano_atual - Number(ano.value) 
        res.innerHTML = `Você tem ${conta} anos`
    }

       
}



function VERIFICAR_MES(mes_atual, mes, dia, dia_atual){
    if (mes.value.length == 0 || Number(mes.value)<1 || Number(mes.value) >12){
        alert("[ERRO] Digite o campo do MÊS correto porfavor")
        location.reload();
    } else if (mes_atual -Number(mes.value)+1 < 0) {
        qtd_mes = 12-Number(mes.value)+1
        if (mes_atual+1 == Number(mes.value) && dia_atual < Number(dia.value)) { 
            qtd_mes = 12-Number(mes.value)
            res.innerHTML += (`, ${qtd_mes} meses` )
        } else if (qtd_mes ==12 && dia >dia_atual && mes == mes_atual) {
            res.innerHTML += (`` )
        } else if (Number(dia.value) < dia_atual+1) {
            res.innerHTML += (`, ${qtd_mes} meses` )
         

        }else {
            res.innerHTML += (`, ${qtd_mes-1} meses` )
           
        }
     
    } else {
        qtd_mes = (mes_atual+1) - Number(mes.value) 
        if (mes_atual+1 == Number(mes.value) && dia_atual < Number(dia.value)) { 
            qtd_mes = 12-Number(mes.value)
            res.innerHTML += (`, ${qtd_mes} meses` )
        }else if (mes_atual+1 == Number(mes.value) && dia_atual == Number(dia.value)) { 
            res.innerHTML += (``)
        }else if (qtd_mes ==0) {
            res.innerHTML += (``)
        } else { 
        qtd_mes = qtd_mes-1
        if (qtd_mes ==0) {
            res.innerHTML += (``)
        } else {
            res.innerHTML += (`, ${qtd_mes} meses` )
           
        }
 
    }
    }
        
    

    
    return mes_atual, mes, qtd_mes
}


function VERIFICAR_DIA(dia_atual, dia, mes, mes_atual, ano, ano_atual) {
    if(dia.value.length == 0 || Number(dia.value)<1 || Number(dia.value) >31){
        alert("[ERRO] Digite o campo do DIA correto porfavor")
        location.reload();
    } else if (Number(mes.value) == 1 || Number(mes.value) == 3 || Number(mes.value) == 5 || Number(mes.value) ==7 || Number(mes.value) ==8 || Number(mes.value) == 10 || Number(mes.value) == 12) {
        var calc = (31-Number(dia.value))+ dia_atual
        if (calc == 32) {
            res.innerHTML += ` e 1 dia`
        } else if(dia >dia_atual && mes == mes_atual+1 ) { 
                calc = 31-(31-30)
                res.innerHTML += ` e ${calc} dias`
        } else if (calc > 32){
                calc = calc-31
                res.innerHTML += ` e ${calc} dias`
        } else if (calc == 31){
            res.innerHTML += ``
        }else {
            var calc = (31-Number(dia.value)+ dia_atual)
            res.innerHTML += ` e ${calc} dias`
        }
    } else if (Number(mes.value)==4 || Number(mes.value) == 6 || Number(mes.value) == 9 || Number(mes.value) == 11){
        var calc = (30-Number(dia.value))+ dia_atual+1
        if (calc == 32) {
            res.innerHTML += ` e 1 dia`
        } else if (calc > 32){
                calc = calc-31
                res.innerHTML += ` e ${calc} dias`
        } else if (calc == 30){
            res.innerHTML += ``
        }else {
            var calc = (31-Number(dia.value)+ dia_atual)
            res.innerHTML += ` e ${calc} dias`
        }
       
    } else {
        var calc = (28-Number(dia.value))+ dia_atual
        if (calc == 32) {
            res.innerHTML += ` e 1 dia`
        } else if (calc > 32){
                calc = calc-31
                res.innerHTML += ` e ${calc} dias`
        } else if (calc == 28){
            res.innerHTML += ``
        } else {
            var calc = (31-Number(dia.value)+ dia_atual)
            res.innerHTML += ` e ${calc} dias`
        }

    }
}


function VERIFICAR_SEXO(img, tSexo, ano_atual, ano) {
     conta = ano_atual - Number(ano.value)-1
    if (tSexo[1].checked) { 
        
        if (conta <18 ) {
        res.innerHTML += "<br>você é crianca/adolescente</br>"
        img.src = "imagens/menina.png"
        } else if  (conta >=18 && conta <60) {
            res.innerHTML += "<br>você é adulta</br>"
            img.src = "imagens/adulta.png"
        } else {
            res.innerHTML += "<br>você é idosa</br>"
            img.src = "imagens/idosas.png"
    } 
    // dar erro se for maior que 31 29 30
    }   else if (tSexo[0].checked) {
        if (conta < 18 ) {
            res.innerHTML += "<br>você é crianca/adolescente</br>"
            img.src = "imagens/menino.png"
            } else if (conta >=18 && conta <60) {  
                res.innerHTML += "<br>você é adulto</br>"         
                img.src = "imagens/adulto.png"
            } else {
                res.innerHTML += "<br>você é idoso</br>"
                img.src = "imagens/idoso.png"
        }
    } else {
            alert("[ERRO] marque uma das opções")
            location.reload()
        }
    
}
function REINICIAR() {
    location.reload()
}

function ANO(){
    var res = document.getElementById("res")
    var agora = new Date()
    res.innerHTML = ""
    var img = document.getElementById("imagem")
    var tSexo = document.getElementsByName("sexo")
    VERIFICAR_ANO(agora.getFullYear(), ano, agora.getMonth(), mes, dia, agora.getDate())
    VERIFICAR_MES(agora.getMonth(), mes, dia, agora.getDate())
    VERIFICAR_DIA(agora.getDate(), dia, mes, agora.getMonth(), ano, agora.getFullYear())
    VERIFICAR_SEXO(img, tSexo, agora.getFullYear(), ano)  
  
    
    
}












