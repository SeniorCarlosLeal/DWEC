    window.onload=incio;

    function incio(){
      document.p11.Boton.onclick=comprobar;
    }//de function

    function comprobar(){
      var localidad=document.p11.Localidad.value.toLowerCase().trim();
      var enviar=true;
      var mensaje="";

      if(localidad.length<3 || localidad.length>35){
        enviar=false;
        mensaje="No cumple con el tamaño que deberia";
      }
      else{
      if(localidad.charAt(0)<"a" || localidad.charAt(0)>"z" || localidad.charAt(1)<"a" || localidad.charAt(1)>"z" ||
          localidad.charAt(2)<"a" || localidad.charAt(2)>"z"){
          enviar=false;
          mensaje="La localidad debe empezar por 3 letras";
      }//de if
      else{
        for(var i =3;i<localidad.length;i++){
          if((localidad.charAt(i)<"a" || localidad.charAt(i)>"z") && (localidad.charAt(i)!=" ")){
            enviar=false;
            mensaje="Localidad mal escrita";
          }//de if
        }//de for

        if(localidad.charAt(localidad.length-1)<"a" || localidad.charAt(localidad.length-1)>"z" || localidad.charAt(localidad.length-2)<"a" || localidad.charAt(localidad.length-2)>"z"){
          enviar=false;
          mensaje="Debe terminar en 2 letras";
        }//de if
      }//de else
  }
      if(enviar==false){
        document.p11.Mensaje.value=mensaje;
      }//de if
      else{
        document.p11.Mensaje.value="Localidad correcta";
      }

    }//de function
