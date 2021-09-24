window.onload=inicio;

function inicio(){
document.p8.Boton.onclick=comprobar;
}

function comprobar(){
    var fecha = document.p8.Fecha.value.trim();
    var fechaDividida = fecha.split('/');
    var dia= fechaDividida[0];
    var mes=fechaDividida[1];
    var anio=fechaDividida[2];

    var enviar=true;
    var mensaje=" "; var salida=true;



    if(isNaN(dia) || isNaN(mes) || isNaN(anio)){
      enviar=false;
      mensaje="No es un numero \n";
    }
    else{
    if(dia.length>2 || dia.length==0 || mes.length>2 || mes.length==0 || anio.length>4 || anio.length==0){
      enviar = false;
      mensaje="La fecha es incorrecta \n";
    }//de if
    else{
      dia=parseInt(fechaDividida[0]);
      mes=parseInt(fechaDividida[1]);
      anio=parseInt(fechaDividida[2]);
        if((mes==2) && (dia>28) && (esAnioBisiesto(anio)==false)){
          enviar=false;
          mensaje = "El mes " + mes + " no puede tener mas de 28 días si no es bisiesto \n";
        }//de if

        else if((mes==2) && (dia>29) && (esAnioBisiesto(anio)==true)){
          enviar=false;
          mensaje=" El mes " + mes + " no puede tener mas de 29 días si es bisiesto \n";
        }//de elseif

        else{
          if((mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12) && (dia>31)){
            enviar=false;
            mensaje=" El mes " + mes + " no puede tener mas de 31 días \n";
          }//de if
          else{
              if((mes==4 || mes==6 || mes==9 || mes==11) && (dia>30)){
                enviar=false;
                mensaje= " El mes " + mes +" no puede tener mas de 30 días \n";
              }//de if
          }//de else
        }//de else
    }//de else
  }

    if(enviar==false){
      document.p8.Mensaje.value=mensaje;
    }//de if
    else{
      document.p8.Mensaje.value="Fecha correcta";
    }//de else
}//de function

function esAnioBisiesto(num){

  if(num%4==0 && num%100==0){
    return false;
  }//de if
  else if(num%4==0 && num%400==0){
    return true;
  }//de elseif
  else if(num%4==0){
    return true;
  }//de elseif
  else{
    return false;
  }
}//de function
