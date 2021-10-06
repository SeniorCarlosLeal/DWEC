window.onload=inicio;

function inicio(){
  document.p13.Boton.onclick = comprobar;
}//de function

function comprobar(){
  var palabraDchaIzda = document.p13.Palindromo.value.toLowerCase().trim();
  var palabraIzdaDcha = document.p13.Palindromo.value.toLowerCase().trim();
  var continua=true;
  var i=0;
  var j =palabraIzdaDcha.length-1;

  while(continua==true && i<palabraDchaIzda.length && j>=0){
    if((palabraDchaIzda.charAt(i) != palabraIzdaDcha.charAt(j)) && (palabraDchaIzda.charAt(i)==" " || palabraIzdaDcha.charAt(j)==" ") ){
      if(palabraDchaIzda.charAt(i)==" "){
        i++;
      }//de if2
      if(palabraIzdaDcha.charAt(j)==" "){
        j--;
      }//de if3
      continua=true;
    }//de if
    else if((palabraDchaIzda.charAt(i) != palabraIzdaDcha.charAt(j)) && (palabraDchaIzda.charAt(i)!=" " || palabraIzdaDcha.charAt(j)!=" ")){
      continua=false;
    }//de else if
    else{
      i++;
      j--;
    }//de else
  }//de while

  if(continua==false){
    document.p13.Mensaje.value="No palindromo";
  }
  else{
    document.p13.Mensaje.value="Si palindromo";
  }

}//de function
