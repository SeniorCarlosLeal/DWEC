window.onload=inicio;

function inicio(){
  document.primero.nif.onfocus=cajaTexto;
}

function cajaTexto(x){
  console.log('Hola');
  let eventos =x || window.event;
  eventos.target.style.backgroundColor="red";
}

function cajaTextoFuera(x){
  x.style.background="white";
}

function codigoPostal(){
  var codigo=document.primero.cp.value;

  if(isNaN(codigo) || parseInt(codigo)<1 || parseInt(codigo)>52){
    document.primero.provincia.value="No es un numero";
  }
  else{
    switch (codigo) {
      case "01":
      document.primero.provincia.value="Araba/Álava";
      break;
      case "02":
      document.primero.provincia.value="Albacete";
      break;
      case "03":
      document.primero.provincia.value="Alicante/Alacant";
      break;
      case "04":
      document.primero.provincia.value="Almería";
      break;
      case "05":
      document.primero.provincia.value="Ávila";
      break;
      case "06":
      document.primero.provincia.value="Badajoz";
      break;
      case "07":
      document.primero.provincia.value="Baleares";
      break;
      case "08":
      document.primero.provincia.value="Barcelona";
      break;
      case "09":
      document.primero.provincia.value="Burgos";
      break;
      case "10":
      document.primero.provincia.value="Cáceres";
      break;
      case "11":
      document.primero.provincia.value="Cádiz";
      break;
      case "12":
      document.primero.provincia.value="Castellón";
      break;
      case "13":
      document.primero.provincia.value="Ciudad Real";
      break;
      case "14":
      document.primero.provincia.value="Córdoba";
      break;
      case "15":
      document.primero.provincia.value="A Coruña";
      break;
      case "16":
      document.primero.provincia.value="Cuenca";
      break;
      case "17":
      document.primero.provincia.value="Gerona";
      break;
      case "18":
      document.primero.provincia.value="Granada";
      break;
      case "19":
      document.primero.provincia.value="Guadalajara";
      break;
      case "20":
      document.primero.provincia.value="Guipuzkoa";
      break;
      case "21":
      document.primero.provincia.value="Huelva";
      break;
      case "22":
      document.primero.provincia.value="Huesca";
      break;
      case "23":
      document.primero.provincia.value="Jaén";
      break;
      case "24":
      document.primero.provincia.value="León";
      break;
      case "25":
      document.primero.provincia.value="Lérida";
      break;
      case "26":
      document.primero.provincia.value="La Rioja";
      break;
      case "27":
      document.primero.provincia.value="Lugo";
      break;
      case "28":
      document.primero.provincia.value="Madrid";
      break;
      case "29":
      document.primero.provincia.value="Málaga";
      break;
      case "30":
      document.primero.provincia.value="Murcia";
      break;
      case "31":
      document.primero.provincia.value="Navarra";
      break;
      case "32":
      document.primero.provincia.value="Orense";
      break;
      case "33":
      document.primero.provincia.value="Asturias";
      break;
      case "34":
      document.primero.provincia.value="Palencia";
      break;
      case "35":
      document.primero.provincia.value="Las Palmas";
      break;
      case "36":
      document.primero.provincia.value="Pontevedra";
      break;
      case "37":
      document.primero.provincia.value="Salamanca";
      break;
      case "38":
      document.primero.provincia.value="Santa Cruz de Tenerife";
      break;
      case "39":
      document.primero.provincia.value="Cantabria";
      case "40":
      document.primero.provincia.value="Segovia";
      break;
      case "41":
      document.primero.provincia.value="Sevilla";
      break;
      case "42":
      document.primero.provincia.value="Soria";
      break;
      case "43":
      document.primero.provincia.value="Tarragona";
      break;
      case "44":
      document.primero.provincia.value="Teruel";
      break;
      case "45":
      document.primero.provincia.value="Toledo";
      break;
      case "46":
      document.primero.provincia.value="Valencia";
      break;
      case "47":
      document.primero.provincia.value="Valladolid";
      break;
      case "48":
      document.primero.provincia.value="Vizcaya";
      break;
      case "49":
      document.primero.provincia.value="Zamora";
      break;
      case "50":
      document.primero.provincia.value="Zaragoza";
      break;
      case "51":
      document.primero.provincia.value="Ceuta";
      break;
      case "52":
      document.primero.provincia.value="Melilla";
      break;

      default:
      document.primero.provincia.value="";
    }
  }//de else
}// de function

function fondoFormulario(x){

}

function imagenCordoba(){
  document.primero.imgprovincia.src="imagenes/cordoba.jpg";
}

function imagenLeon(){
  document.primero.imgprovincia.src="imagenes/leon.jpg";
}
function imagenSegovia(){
  document.primero.imgprovincia.src="imagenes/segovia.jpg";
}
function imagenSevilla(){
  document.primero.imgprovincia.src="imagenes/sevilla.jpg";
}

function imagenesAficiones(){
  var imagenes=[];
  var contador=0;
  if(document.primero.viajar.checked){
    imagenes.push("imagenes/viajar.jpg");
    contador++;
  }//de if

  if (document.primero.leer.checked) {
    imagenes.push("imagenes/leer.jpg");
    contador++;
  }//de if

  if (document.primero.musica.checked) {
    imagenes.push("imagenes/musica.jpg");
    contador++;
  }//de if

  if (document.primero.cine.checked) {
    imagenes.push("imagenes/cine.jpg");
    contador++;
  }//de if

  if (document.primero.deporte.checked) {
    imagenes.push("imagenes/deporte.jpg");
    contador++;
  }//de if

  if (document.primero.cena.checked) {
    imagenes.push("imagenes/cenar.jpg");
    contador++;
  }//de if

  var numero = Math.floor(Math.random() * contador);
  setInterval(rotarImagenes(imagenes,numero),100);

}//de function

function rotarImagenes(imagenesARotar,indice){
  document.primero.img_aficion.src=imagenesARotar[indice];
}//de function

function bienvenida(){
  alert("Bienvenido!");
}//de function

function comprobar(x){
  var texto=x.value.toLowerCase().trim();
  var masCaracteres=["á","é","í","ó","ú", " "];
  var enviar=true;

  for(var i=0;i<texto.length;i++){
    if((texto.charAt(i)<"a" || texto.charAt(i)>"z") && (!masCaracteres.includes(texto.charAt(i)))){
      enviar=false;
    }//de if
  }//de for

  if(enviar==false){
    alert("Solo se admiten letras");
  }//de if
}//de function

function resetear(){
  document.primero.reset();
}//de resetear

function comprobar(){
  var nombreCorrecto=comNombre(document.primero.nombre.value.toLowerCase().trim());
  var apellidosCorrectos=comApellidos(document.primero.apellidos.value.toLowerCase().trim());
  var mensaje ="";
  var cont=0;
  if(nombreCorrecto==true){
    cont++;
  }//de if
  else{
    mensaje+="Error en el nombre \n";
  }

  if(apellidosCorrectos==true){
    cont++;
  }//de if
  else{
    mensaje+="Error en el apellido \n";
  }//de else

  if(cont==2){
    return true;
  }//de if
  else{
   alert(mensaje);
  }//de else

}//de function

function comNombre(nombre){
  var correcto=true;
  var masCaracteres=["á","é","í","ó","ú", " "];

  if(nombre.length<6 || nombre.length>20){
    correcto=false;
  }//de if

  else{
    for(var i=0;i<nombre.length;i++){
      if((nombre.charAt(i)<"a" || nombre.charAt(i)>"z") && (!masCaracteres.includes(nombre.charAt(i)))){
        correcto=false;
      }//de if
    }//de for

    if((nombre.charAt(0)<"a" || nombre.charAt(0)>"z") || (nombre.charAt(1)<"a" || nombre.charAt(1)>"z") || (nombre.charAt(2)<"a" || nombre.charAt(2)>"z")
    || (nombre.charAt(nombre.length-2)<"a" || nombre.charAt(nombre.length-2)>"z") || (nombre.charAt(nombre.length-1)<"a" || nombre.charAt(nombre.length-1)>"z")){
      correcto = false;
    }//de if
  }//de else
  return correcto;
}//de function

function comApellidos(apellido){
var correcto=true;
  var masCaracteres=["á","é","í","ó","ú", " "];

  if(apellido.length<12 || apellido.length>35){
    correcto=false;
  }//de if
  else{
    for(var i =0;i<apellido.length;i++){
      if((i==apellido.length-1 || i==apellido.length-2 || i==apellido.length-3 || i==apellido.length-4) || (i==0 || i==1 || i==2 || i==3)){
        if(apellido.charAt(i)<"a" || apellido.charAt(i)>"z"){
          correcto=false;
        }//de if2
      }//de if
      else{
        if((apellido.charAt(i)<"a" || apellido.charAt(i)>"z") && (!masCaracteres.includes(apellido.charAt(i)))){
          correcto=false;
        }//de if
      }//de else
    }//de for
  }//de else
  return correcto;
}//de fucntion
