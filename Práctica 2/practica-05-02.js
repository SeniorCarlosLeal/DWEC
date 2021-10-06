
window.onload=inicio;


function inicio(){
  alert('Bienvenido');
  document.primero.nif.onfocus=cajaTexto;
  document.primero.nombre.onfocus=cajaTexto;
  document.primero.apellidos.onfocus=cajaTexto;
  document.primero.domicilio.onfocus=cajaTexto;
  document.primero.localidad.onfocus=cajaTexto;
  document.primero.cp.onfocus=cajaTexto;

  document.primero.nif.onblur=cajaTextoFuera;
  document.primero.nombre.onblur=cajaTextoFuera;
  document.primero.apellidos.onblur=cajaTextoFuera;
  document.primero.domicilio.onblur=cajaTextoFuera;
  document.primero.localidad.onblur=cajaTextoFuera;
  document.primero.cp.onblur=cajaTextoFuera;

  document.primero.nombre.onchange=comprobarNombre;
  document.primero.apellidos.onchange=comprobarNombre;
  document.primero.localidad.onchange=comprobarNombre;

  document.primero.cp.onchange=codigoPostal;

  document.primero.provin[0].onclick=imagenCiudades;
  document.primero.provin[1].onclick=imagenCiudades;
  document.primero.provin[2].onclick=imagenCiudades;
  document.primero.provin[3].onclick=imagenCiudades;

  document.primero.viajar.onchange=imagenesTiempo;
  document.primero.leer.onchange=imagenesTiempo;
  document.primero.musica.onchange=imagenesTiempo;
  document.primero.deporte.onchange=imagenesTiempo;
  document.primero.cena.onchange=imagenesTiempo;

  document.primero.limpiar.onclick=resetear;

  document.primero.enviar.onclick=comprobar;

  document.body.onkeyup=fondoFormulario;

}

function cajaTexto(evento ){
  let eventos =evento || window.event;
  eventos.target.style.background="red";
}

function cajaTextoFuera(x){
  let eventos =x || window.event;
  eventos.target.style.background="white";
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
var contador=0;
function fondoFormulario(x){

  var imagenesFondo=["imagenes/Paris Torre Eiffel.jpg", "imagenes/Venecia Plaza San Marcos.jpg", "imagenes/lisboa torre belem.jpg","imagenes/atena_acropoli.jpg",
                    "imagenes/roma fontana di trevi.jpg"];
  if(x.keyCode==114 && x.ctrlKey){
  document.body.style.backgroundImage = "url('"+imagenesFondo[contador]+"')";// "url("+imagenesFondo[0]+")"
  }//de if
  contador=++contador % imagenesFondo.length;
}

function imagenCiudades(x){
  var ciudad=x || window.event;
  var nCiudad=ciudad.target.value;
  console.log(nCiudad);
  if(nCiudad=="cordoba"){
    document.primero.imgprovincia.src="imagenes/cordoba.jpg";
  }//de if

  if(nCiudad=="leon"){
    document.primero.imgprovincia.src="imagenes/leon.jpg";
  }//de if

  if(nCiudad=="segovia"){
    document.primero.imgprovincia.src="imagenes/segovia.jpg";
  }//de if

  if(nCiudad=="sevilla"){
    document.primero.imgprovincia.src="imagenes/sevilla.jpg";
  }//de if
}//de function

var numero;
var imagenes;

function imagenesTiempo(){
  setInterval(imagenesAficiones,1000);
}

function imagenesAficiones(x){
  var img=x|| window.event;
   imagenes=[];
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

   numero = Math.floor(Math.random() * contador);
   rotarImagenes();

}//de function

function rotarImagenes(){

  document.primero.img_aficion.src=imagenes[numero];
}//de function

function comprobarNombre(x){
  let nombre = x || window.event;
  var texto=nombre.target.value.toLowerCase().trim();
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
  var domicilioCorrecto=comDomicilio(document.primero.domicilio.value.toLowerCase().trim());
  var localidadCorrecto=comLocalidad(document.primero.localidad.value.toLowerCase().trim());
  var dniCorrecto=comDni(document.primero.localidad.value.toLowerCase().trim());
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

  if(domicilioCorrecto==true){
    cont++;
  }//de if
  else{
    mensaje+= "Error en el domicilio \n";
  }//de else

  if(localidadCorrecto==true){
    cont++;
  }//de if
  else{
    mensaje+= "Error en la localidad \n";
  }//de else

  if(dniCorrecto==1){
    cont++;
  }
  else if (dniCorrecto==2) {
    mensaje+="Se ha introducido un NIF erróneo. El carácter de control es erróneo \n";
  }

  else if(dniCorrecto=3){
    mensaje+="Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000.";
  }
  else{
    mensaje+="Dni no válido \n";
  }

  if(cont==5){
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

function comDomicilio(domi){
  var correcto=true;
  var masCaracteres=["á","é","í","ó","ú", " ", "," , "º" , "."];

  if(domi.length<15 || domi.length>40){
    correcto=false;
  }//de if
  else{
    for(var i=0;i<domi.length;i++){
      if(i==0 || i==1 || i==2 ){
        if(domi.charAt(i)<"a" || domi.charAt(i)>"z"){
          correcto=false;
        }//de if2
      }//de if
      else if(i==domi.lenght-1){
        if((domi.charAt(i)<"a" || domi.charAt(i)>"z") && (parseInt(domi.charAt(i))<0 || parseInt(domi.charAt(i))>9) ){
          correcto=false;
        }//de if
      }//de else if
      else{
        if( (domi.charAt(i)<"a" || domi.charAt(i)>"z") && (!masCaracteres.includes(domi.charAt(i))) && (parseInt(domi.charAt(i))<0 || parseInt(domi.charAt(i))>9)){
          correcto=false;
        }//de if
      }//de else
    }//de for
  }//de else
  return correcto;
}//de function

function comLocalidad(localidad){
  var correcto=true;
  var masCaracteres=["á","é","í","ó","ú", " "];

  if(localidad.length<6 || localidad.length>20){
    correcto=false;
  }//de if

  else{
    for(var i=0;i<localidad.length;i++){
      if((localidad.charAt(i)<"a" || localidad.charAt(i)>"z") && (!masCaracteres.includes(localidad.charAt(i)))){
        correcto=false;
      }//de if
    }//de for

    if((localidad.charAt(0)<"a" || localidad.charAt(0)>"z") || (localidad.charAt(1)<"a" || localidad.charAt(1)>"z") || (localidad.charAt(2)<"a" || localidad.charAt(2)>"z")
    || (localidad.charAt(localidad.length-3)<"a" || localidad.charAt(localidad.length-3)>"z" || localidad.charAt(localidad.length-2)<"a" || localidad.charAt(localidad.length-2)>"z")
    || (localidad.charAt(localidad.length-1)<"a" || localidad.charAt(localidad.length-1)>"z")){
      correcto = false;
    }//de if
  }//de else
  return correcto;
}//de fucntion

function comDni(dni){
  var salida=1;
  var letraControl=["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X" ,"B" ,"N" ,"J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

  var numerosDni=str.substring(0,dni.length-2);
  let resto=0; let letra;
  if(numerosDni.length<6 || numerosDni.lenght>8 || numerosDni<100000){
    salida= 3;
  }//de if
  else{
    resto=numerosDni%23;
    letra=letraControl[resto];
    if(letra!=dni.charAt(dni.lenght-1)){
      salida= 2;
    }//de if
    else{
      if(isNaN(numerosDni)){
        salida=0;
      }//de if
    }//de else
  }//de else
  return salida;
}
