window.onload=inicio;

function inicio(){
  document.p10.Boton.onclick=comprobar;
}

function comprobar(){
  var url = document.p10.Url.value.toLowerCase().trim();
  var urlDividida= url.split('.');
  var enviar = true;
  var mensaje="";
  var otrosCaracteres =  new Array("1","2","3","4","5","6","7","8","9","-");

  var cont=0;
  for(var i=0;i<url.length;i++){
    if(url[i]=="."){
      cont++;
    }//de if
  }//de for
  if(cont!=2){
    enviar=false;
    mensaje="Web escrita incorrectamente";
  }//de if

  else{
    if(url.includes("www.")==false){
      enviar=false;
      mensaje="Web sin www";
    }//de if
    else{
      var web = urlDividida[1];
      if(web.charAt(0)<"a" || web.charAt(0)>"z"){
        enviar=false;
        mensaje="La web no puede empezar por algo distinto de una letra";
      }//de if
      else{
        for(var i=1;i<web.length;i++){
          if((web.charAt(i)<"a" || web.charAt(i)>"z") && (otrosCaracteres.includes(web.charAt(i))==false)){
            enviar=false;
            mensaje="Caracteres incorrectos";
          }//de if
        }//de for
        if(web.charAt(web.length-1)<"a" || web.charAt(web.length-1)>"z" || web.charAt(web.length-1)=="-"){
          enviar=false;
          mensaje="Web terminada incorrectamente";
        }//de if
        else{
          if(urlDividida[2].length<2 || urlDividida[2].length>4){
            enviar=false;
            mensaje="Mal escrito y el final de la web";
          }//de if
        }//de else
      }//de else
    }//de else
  }//de else

  if(enviar==false){
    document.p10.Mensaje.value=mensaje;
  }
  else{
    document.p10.Mensaje.value="Web correcta";
  }
}//de function
