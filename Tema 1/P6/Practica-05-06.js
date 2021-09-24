function comprobar(){
var texto=document.getElementById('Cadena').value;
var subCadena=document.getElementById('Vocales').value;
var cont=0;
var indice=0;
while(texto.includes(subCadena,indice)){
  cont++;
  indice=indice + subCadena.length;
  texto=texto.substring(indice);  
}//de while

if(cont>0){
    document.p6.Mensaje.value="La sub cadena se repite "+ cont + " veces";
}//de if

else{
  document.p6.Mensaje.value="La sub cadena se repite 0 veces";
}//de else
}//de function
