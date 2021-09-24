function comprobar(){
  var texto=document.getElementById('Cadena').value;
  var vocales=0;
  var espacios=0;

  for(let i=0;i<texto.length;i++){
    if(esVocal(texto.charAt(i))){
      vocales++;
    } //de if
    if(texto.charAt(i)==" "){
      espacios++;
    }//de if
  }//de for
  var consonantes=texto.length-vocales-espacios;

  document.p5.Vocales.value="Hay " + vocales + " vocales";
  document.p5.Consonantes.value="Hay " + consonantes + " consonantes";
}//de fucntion

function esVocal(letra){
  let voc=true;
  if(letra!="a" && letra!="e" && letra!="i" && letra!="o" && letra!="u" ){
    voc=false;
  }//de if

  return voc;
}//de function
