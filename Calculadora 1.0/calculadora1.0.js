var visor2 = document.getElementById("display");

var igual = document.getElementById("igual");
igual.addEventListener("click", calcular, false);

function calcular(){
    if(visor2.value === "undefined" || visor2.value ===""){
    document.getElementById("display").value="! DEBE OPERAR ANTES ¡";
    }else{
    x = visor2.value;
    x = eval(x);
    visor2.value = x;
    }
}
function agregarDisplay(n){
visor2.value += n;
}
function limpiar(){
visor2.value = "";
}
function eliminarUltimoNumero(){
visor2.value = visor2.value.substring(0, visor2.value.length-1)
}