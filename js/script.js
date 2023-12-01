let n1E = document.getElementById("numero1");
let n2E = document.getElementById("numero2");
let operador = document.getElementById("operacion");
let btn = document.getElementById("btnOperar");
let listaInfo = document.getElementById("listaInfo");


function aOperar(){
    console.log(operador.value);
    let n1 = parseFloat(n1E.value);
    let n2 = parseFloat(n2E.value);
    let result;
    let msg;
    if(operador.value==="suma"){
        result = n1+n2;
        msg = n1 + ' + ' + n2 + ' = ' + result.toFixed(2);
    }else if(operador.value==="resta"){
        if(n2>n1){
            alert("El segundo número no puede ser mayor que el primer número");
            return;
        }
        result = n1-n2;
        msg = n1 + ' - ' + n2 + ' = ' + result.toFixed(2);
    }else if(operador.value==="multiplicacion"){
        result = n1*n2;
        msg = n1 + ' * ' + n2 + ' = ' + result.toFixed(2);
    }else if(operador.value==="division"){
        if(n2==0){
            alert("El segundo número no puede ser cero");
            return;
        }
        result = n1/n2;
        msg = n1 + ' / ' + n2 + ' = ' + result.toFixed(2);
    }else if(operador.value==="potencia"){
        
        result = Math.pow(n1,2);
        msg = n1 + ' ^ ' + 2 + ' = ' + result.toFixed(2);
    }else if(operador.value==="raiz"){
        result = Math.sqrt(n1);        
        msg = n1 + '=' + result.toFixed(2);
    }else if(operador.value==="mayor"){
        if(n1>n2){
            result = n1            
        }else{
            result = n2;            
        }   
        msg = n1 + ' > ' + n2 + ' = ' + result.toFixed(2);             
    }else if(operador.value==="menor"){
        if(n1<n2){
            result = n1
        }else{
            result = n2;
        }        
        msg = n1 + ' < ' + n2 + ' = ' + result.toFixed(2);
    }else{
        result = "NO SE ENCUENTRA LA OPCIN"
        return;
    }

    let html = "";

/*    html = '<li class="list-group-item">'+operador.value + '\t' +  msg + '</li>';*/
    html = '<tr><td  class="col-4">'+operador.value.toUpperCase()+'</td><td class="col-8">'+msg+'</td></tr>';
    listaInfo.innerHTML = html + listaInfo.innerHTML;    
    limpiar();
}


function validarOpcion(){
    console.log(operador.value);
    if(operador.value==="potencia"){
        n2E.disabled = true;
        n2E.value = "";
    }else{
        n2E.disabled = false;
    }
    
}

function limpiar(){
    n1E.value = "";
    n2E.value = "";
}

//operador.addEventListener("change",validarOpcion);
btn.addEventListener("click",aOperar);
