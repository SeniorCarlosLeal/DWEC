window.onload=inicio;

function inicio(){
  document.p9.Boton.onclick=comprobar;
}

function comprobar(){
  var emailOriginal=document.p9.Email.value.toLowerCase().trim();
  var enviar=true;
  var mensaje="";
  var otroCar= new Array(".","-");
  var numeros=new Array("0","1","2","3","4","5","6","7","8","9");

  var primeraParte=emailOriginal.substring(0,emailOriginal.indexOf('@'));
  var segundaParte=emailOriginal.substring(emailOriginal.indexOf("@")+1,emailOriginal.indexOf("."));
  var terceraParte=emailOriginal.substring(emailOriginal.indexOf(".")+1);

  if(primeraParte.charAt(0)<"a" || primeraParte.charAt(0)>"z"){
    enviar=false;
    mensaje="El email debe empezar por una letra";
  }//de if
  else{
    if((primeraParte.charAt(primeraParte.length-1)<"a" || primeraParte.charAt(primeraParte.length-1)>"z") &&
    (numeros.includes(primeraParte.charAt(primeraParte.length-1))==false)){
      enviar=false;
      mensaje="Antes de la @ solo numeros o letras";
    }//de if
    else{
      for(var i=1;i<primeraParte.length;i++){
        if((primeraParte.charAt(i)<"a" || primeraParte.charAt(i)>"z") && (numeros.includes(primeraParte.charAt(i))==false ) &&
        (otroCar.includes(primeraParte.charAt(i))==false) ){
          enviar=false;
          mensaje="Caracteres invalidos";
        }//de if
      }//de for
    }//de else
  }//de else

  //-----------------------------------------------------------------------------------------------------------------------------------------

  if(segundaParte.charAt(0)<"a" || segundaParte.charAt(0)>"z"){
    enviar=false;
    mensaje="Despues de @ debe empezar con una letra";
  }//de if
  else{
    if((segundaParte.charAt(segundaParte.length-1)<"a" || segundaParte.charAt(segundaParte.length-1)>"z") &&
    (numeros.includes(segundaParte.charAt(segundaParte.length-1))==false) ){
      enviar=false;
      mensaje="Antes del punto tiene que acabar en letra o numero";
    }//de if
    else{
      for(var i=1;i<segundaParte.length-2;i++){
        if((segundaParte.charAt(i)<"a" || segundaParte.charAt(i)>"z") && (numeros.includes(segundaParte.charAt(i))==false ) &&
        (otroCar.includes(segundaParte.charAt(i))==false) ){
          enviar=false;
          mensaje="Solo caracteres válidos";
        }//de if
      }//de for
    }//de else
  }//de else

  //---------------------------------------------------------------------------------------------------------------------------------------------

  if(terceraParte.length<2 || terceraParte.length>4){
    enviar=false;
    mensaje="La extension tiene que ser de la longitud establecida";
  }//de if

  else{
    for(var i=0;i<terceraParte.length;i++){
      if(terceraParte.charAt(i)<"a" || terceraParte.charAt(i)>"z"){
        enviar=false;
        mensaje="La extension solo puede ser letras";
      }//de if
    }//de for
  }//de else

  if(enviar==false){
    document.p9.Mensaje.value=mensaje;
  }//de if
  else{
    document.p9.Mensaje.value="Correcto";
  }
}//de function
