window.onload=inicio;
function inicio(){
  document.primero.validar.onclick=mostrarMinimos;
}//de function

//---------------------------------------------------------

function minimo(val1,val2,val3, val4=13, val5=7){
  var minimo=Number.MAX_VALUE;

  var array=new Array();
  array.push(val1,val2,val3,val4,val5);

  for(var i=0;i<array.length;i++){
    if(array[i]<minimo){
      minimo=array[i];
    }//de if
  }//de for
  return minimo;
}//de fucntion

function mostrarMinimos(){
  var val1=document.primero.val1.value.trim();
  var val2=document.primero.val2.value.trim();
  var val3=document.primero.val3.value.trim();
  var val4=document.primero.val4.value.trim();
  var val5=document.primero.val5.value.trim();

  if(val4=="" && val5==""){
      document.primero.minimo.value=minimo(val1,val2,val3);
  }

  else if(val4!="" && val5==""){
    document.primero.minimo.value=minimo(val1,val2,val3,val4);
  }
  else if(val4!="" && val5!=""){
    document.primero.minimo.value=minimo(val1,val2,val3,val4,val5);
  }


}//de function
