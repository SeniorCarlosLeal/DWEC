window.onload= inicio;

function inicio(){
  document.p12.Boton.onclick=comprobar;
}

function comprobar(){
  var direccion=document.p12.Direccion.value.toLowerCase().trim();
  var enviar=true;
  var mensaje="";
  var masCaracteres=new Array("ª","º","-"," ","," , "/");
  if(direccion.charAt(0)<"a" || direccion.charAt(0)>"z" || direccion.charAt(direccion.length-1)<"a" || direccion.charAt(direccion.length-1)>"z" ||
  direccion.length<8 || direccion.length>45){
    enviar=false;
    mensaje="La direccion tiene que empezar por una letra y acabar por una letra. No puede tener mas de 45 caracteres y no puede ser menor que 8";
  }//de if

  else{
    for(var i=1; i<=direccion.length-2;i++){
      if((direccion.charAt(i)<"a" || direccion.charAt(i)>"z") && (masCaracteres.includes(direccion.charAt(i))==false)){
        enviar=false;
        mensaje="Caracteres incorrectos";
      }//de if
    }//de for
  }//de else
  
  if(enviar==false){
    document.p12.Mensaje.value=mensaje;
  }//de if
  else{
    document.p12.Mensaje.value="Direccion correcta";
  }//de else
}//de function
