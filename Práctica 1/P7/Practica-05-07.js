window.onload=inciar;

function iniciar(){
  document.p7.onsubmit=comprobar;
}//de function

function comprobar(){
  var enviar = true;
  var nombre = document.getElementById('Nombre').value.toLowerCase().trim();
  var mensaje = "";
  var otrosCaracteres = new Array("ª","º","-"," ");
  if(nombre.length<3 || nombre.length>27){
    enviar=false;
    mensaje="No cumple con los requisitos de longitud";
  }//de if
  else{
    var letra=nombre.charAt(0);
      if(letra<"a" || letra>"z"){
        enviar=false;
        mensaje="No cumple con los requisitos de tener que empezar por una letra";
      }//de if
      else{
        var i=1;
          while(enviar && i<nombre.length-1){
            letra=nombre.charAt(i);
            if((letra<"a" || letra>"z" ) && (otrosCaracteres.includes(letra)==false)){
              enviar=false;
              mensaje="No se respetan las normas";
            }//de if
            i++;
          }//de while
      }//de else
  }//de else

  if(enviar==false){
        document.p7.Mensaje.value=mensaje;
  }//de if
  else{
        document.p7.Mensaje.value="Datos correctos";
  }// de else
}
