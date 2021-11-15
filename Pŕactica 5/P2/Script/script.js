window.onload=inicio;
function inicio(){
  document.primero.validar.onclick=mostrarMaximos;
}//de function

//---------------------------------------------------------

function maximos(num1,num2,num3,...num4){
  var primerMaxValor=num1;
  var segundoMaxValor=num1;

  num4.push(num2,num3);
  console.log(num4);
  for(var i=0;i<num4.length;i++){

      if(num4[i]>primerMaxValor && num4[i]>segundoMaxValor){
        primerMaxValor=num4[i];
        console.log("Primero " + primerMaxValor);
      }//si el valor es mas mayor que todos
      if ((num4[i]<primerMaxValor && num4[i]>segundoMaxValor && num4[i]!=primerMaxValor) || (primerMaxValor==segundoMaxValor) ){
        segundoMaxValor=num4[i];
        console.log("Segundo " + segundoMaxValor);
      }//si el valor es mayor que el segundo y menor que el priemro

  }//de for

  return [primerMaxValor,segundoMaxValor];
}//de fucntion

function mostrarMaximos(){
  var max=maximos(34,31,12,24,2,3,1,8,30);
  document.primero.primerValor.value=max[0];
  document.primero.segundoValor.value=max[1];
}//de function
