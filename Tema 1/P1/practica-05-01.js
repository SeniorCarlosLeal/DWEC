window.onload=numPrimos;
function numPrimos(){
  let num=1;
  while(num<=100){
    if(esPrimo(num)){
      document.formPrimos.tPrimos.value+=num  + " | ";
    }//de if
      num++;
  }//de while

}
  function esPrimo(valor){
    let primo=true;
    for(var i=2;i<valor;i++){
        if(valor%i==0){
          primo=false;
        }//de if
    }//de for
    return primo;
  }//de esPrimo
