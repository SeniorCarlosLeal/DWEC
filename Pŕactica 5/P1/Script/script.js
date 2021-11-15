window.onload=inicio;
function inicio(){
  document.primero.validar.onclick=mostrarMedia;
}//de function

//---------------------------------------------------------

function media(){
  if(arguments.length==0){
    return 0;
  }//de if

  else{
    var acum=0;
    for(var i=0;i<arguments.length;i++){
      acum+=arguments[i];
    }//de for

    return (acum/arguments.length);
  }//de else
}//de fucntion

function mostrarMedia(){
  document.primero.nombre.value=media(3,4,5,2);
}//de function
