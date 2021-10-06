window.onload=numPrimos;

function numPrimos(){
  let cont=0;
  let num=1;

  while(cont<100){
    if(esPrimo(num)){
      cont++;
      document.formPrimos.tPrimos.value+= num + "|" ;
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
