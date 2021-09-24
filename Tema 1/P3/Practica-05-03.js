
function numerosPrimosF(){
  var NInic=parseFloat(document.getElementById('NumeroInicial').value);  var NFin=parseFloat(document.getElementById('NumeroFinal').value);
  //se usa parseFloat para poder trabajar con nº. Si no sería una cadena de texto
  var num=NInic+1;
  
while(num<NFin){
  if(esPrimo(num)){
    document.p3.NumerosPrimos.value+= num + " | ";
  }//de if
  num++;
}//de while
}//de function

function esPrimo(num){
  let primo=true;
  for(let i=2;i<num;i++){
    if(num%i==0){
      primo=false;
    }//de if
  }//de for
  return primo;
}//de function
