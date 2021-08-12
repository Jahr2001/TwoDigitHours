function zfill(numero, anchura) {
    var numeroSalida = Math.abs(numero); /*Valor Absoluto del número*/
    var longitud = numero.toString().length; /* Longitud del número */ 
    var cero = "0"; /* Cadena de 0*/  
    
    if (anchura <= longitud){
        if(numero < 0){
            return ("-" + numeroSalida.toString()); 
        }else{
            return numeroSalida.toString(); 
        }
    }else{
        if(numero < 0){
            return ("-" + (cero.repeat(anchura - longitud)) + numeroSalida.toString()); 
        }else{
            return ((cero.repeat(anchura - longitud)) + numeroSalida.toString()); 
        }
    }
}


function solution(S, T){
    console.log("S: ", S)
    console.log("T: ", T)

    x = S.split(":")
    y = T.split(":")

    console.log(":", x)
    console.log(":", y)

    var interesting = 0
    var hora_Inicial = parseInt(x[0]+x[1]+x[2])
    var hora_Final = parseInt(y[0]+y[1]+y[2])

    console.log("Hora Inicial: ", hora_Inicial)
    /*document.writeln("Hora Inicial: ", hora_Inicial)*/

    console.log("Hora Final: ", hora_Final)
    /*document.writeln("Hora Final: ", hora_Final)*/

    if(hora_Inicial >= 0 && hora_Final >= hora_Inicial && hora_Final <= 235959){
        console.log("x[0]: ", x[0]) //HORA INICIAL
        console.log("x[1]: ", x[1]) //MINUTO INICIAL
        console.log("x[2]: ", x[2]) //SEGUNDO INICIAL

        console.log("y[0]: ", y[0]) //HORA FINAL
        console.log("y[1]: ", y[1]) //MINUTO FINAL
        console.log("y[2]: ", y[2]) //SEGUNDO FINAL

        for(let hora = parseInt(x[0]); hora < 24; hora++){

            if(parseInt(String(hora))>= parseInt(x[0]) && parseInt(String(hora))<= parseInt(y[0])){

                for(let minuto = parseInt(x[1]); minuto<60; minuto++){

                    if(parseInt(String(minuto)) >= parseInt(x[1])  && parseInt(String(minuto)) <= parseInt(y[1])){
                        
                        for(let segundo = parseInt(x[2]); segundo<60; segundo++){
                            
                            if(parseInt(String(segundo)) >= parseInt(x[2]) && parseInt(String(segundo)) <= parseInt(y[2])){
                                
                                formatted = String(zfill(hora,parseInt(2))) + String(zfill(minuto, parseInt(2))) + String(zfill(segundo, parseInt(2)))
                                
                                console.log("Formatted: ", formatted)
                                /*document.writeln("Formatted: ", formatted)*/
                                var formatt = new Set(formatted).size
                                console.log(formatt)

                                if((new Set(formatted).size == 2) || (new Set(formatted).size == 1)){
                                    interesting +=1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log("Interesting: ", interesting)
}

solution('15:15:00', '15:15:12')
console.log('\n\n')
solution('22:22:21', '22:22:23')
console.log('\n\n')
solution('00:00:12', '00:00:59')