window.onload=inicio;

function inicio(){
  //  document.p1.Boton.onclick=queEs;
  //document.p1.BotonBanco.onclick=codigosControl;
  //document.p1.BotonIban.onclick=ibanEspania;
  //document.p1.BotonIbanEx.onclick=comprobarIbanCorrecto;
  document.primero.onsubmit=comprobarFormulario;

}

//--------------------------------------------------------------------------

function comprobarFormulario(){
  var enviar=true;
  var mensaje="";
  if(esCorrectoApellidosNombre()==false){
    mensaje+="Apellidos y Nombre incorrectos \n";
    enviar=false;
  }//de if

  if(esCorrectoCodigoEmpresa()==false){
    mensaje+="Codigo Empresa Incorrecto \n";
    enviar=false;
  }//de if

  if(queEs()=="Invalido"){
    mensaje+="CIF/NIF inválidos \n";
    enviar=false;
  }

  if(esDireccionCorrecta()==false){
    mensaje+="La direccion es incorrecta\n";
    enviar=false;
  }//de if

  if(esLocalidadCorrecta()==false){
    mensaje+="Localidad Incorrecta \n";
    enviar=false;
  }//de if

  if(esCodPostalCorrecto()==false){
    mensaje+="Codigo Postal Incorrecto \n";
    enviar=false;
  }

  if(esTelefonoCorrecto()==false){
    mensaje+="Telefono incorrecto \n";
    enviar=false;
  }

  if(esFechaCorrecta()==false){
    mensaje+="Fecha Incorrecta\n";
    enviar=false;
  }//de if

  if(sonCodigosCorrectos()==false){
    mensaje+="Codigo del Banco ó código de oficina incorrecto \n ";
    enviar=false;
  }

  /*if(codigoControlCorrecto()==false){
    mensaje+="Codigo de control incorrecto";
    enviar=false;
  }*/

  if(sectorEconomicoCorrecto()==false){
    mensaje+="Al menos 1 sector economico seleccionado\n";
    enviar=false;
  }

  if(comunidadesCorrectas()==false){
    mensaje+="Al menos 2 comunidades deben ser seleccionadas";
    enviar=false;
  }//de if

  if(enviar==true){
    alert("Correcto");
  }//de if
  else{
    alert(mensaje);
  }//de else
  return enviar;
}//de fucntion

//--------------------------------------------------------------------------

function comunidadesCorrectas(){
  var cont=0; var enviar=true;
  for(var i=0;i<document.primero.menu.length;i++){
    if(document.primero.menu[i].selected){
      cont++;
    }//de if
  }//de for

  if(cont<2){
    enviar=false;
  }//de if

  return enviar;
}//de fucntion

//--------------------------------------------------------------------------

function sectorEconomicoCorrecto(){
  var cont=0;
  var enviar =true;
  if(document.primero.Alimentacion.checked){
    cont++;
  }//de if

  if(document.primero.Informática.checked){
    cont++;
  }//de if

  if(document.primero.Comercio.checked){
    cont++;
  }//de if

  if(document.primero.Construccion.checked){
    cont++;
  }//de if

  if(document.primero.Hosteleria.checked){
    cont++;
  }//de if

  if(document.primero.Automocion.checked){
    cont++;
  }//de if

  if(document.primero.Calzado.checked){
    cont++;
  }//de if

  if(document.primero.Turismo.checked){
    cont++;
  }//de if

  if(document.primero.Agricultura.checked){
    cont++;
  }//de if

  if(document.primero.Ganaderia.checked){
    cont++;
  }//de if

  if(document.primero.Otros.checked){
    cont++;
  }//de if

  if(cont<1){
    enviar=false;
  }

  return enviar;
}//de function

//--------------------------------------------------------------------------

//Comprobamos los apellidos y Nombre

function esCorrectoApellidosNombre(){
  var apNom=document.primero.ApellidosYNombre.value.toLowerCase().trim();
  var enviar=true;
  var masCaracteres=["ª","º","-","."];

  if( (apNom.charAt(0)<"a" || apNom.charAt(0)>"z") && (apNom.charAt(apNom.length-1)<"a" || apNom.charAt(apNom.length-1)>"z" || apNom.charAt(apNom.length-1)!="." || parseInt(apNom.charAt(apNom.length-1))<0 || parseInt(apNom.charAt(apNom.length-1))>9)  ){
    enviar=false;
  }//de if

  else{
    for(var i=1;i<apNom.length-1;i++){
      if( (apNom.charAt(i)<"a" || apNom.charAt(i)>"z") && (masCaracteres.includes(apNom.charAt(i))==false) && (parseInt (apNom.charAt (i) )<0 || parseInt (apNom.charAt (i) )>9 ) ){
        enviar=false;
      }//de if
    }//de for
  }//de else
  return enviar;
}//de function

//--------------------------------------------------------------------------

//Comprobaremos el codigo del Banco

function esCorrectoCodigoEmpresa(){
  var codEmpresa= document.primero.CodigoEmpresa.value.toLowerCase().trim();
  var enviar=true;
  var masCaracteres=["ª","º","-","." , "/"];

  if(codEmpresa.length<5 || codEmpresa.length>10){
    enviar=false;
  }//de if
  else{
    for(var i=0;i<codEmpresa.length;i++){
      if( (codEmpresa.charAt(i)<"a" || codEmpresa.charAt(i)>"z") && (parseInt(codEmpresa.charAt(i))<0 || parseInt(codEmpresa.charAt(i))>9 ) ){
        enviar=false;
      }//de if
    }//de for
  }//de else
  return enviar;
}//de fucntion

//--------------------------------------------------------------------------

//Comprobamos la direccion

function esDireccionCorrecta(){
  var direccion=document.primero.Direccion.value.toLowerCase().trim();
  var enviar=true;

  if( (direccion.charAt(0)<"a" || direccion.charAt(0)>"z") || (direccion.charAt(direccion.length-1)<"a" || direccion.charAt(direccion.length-1)>"z"
  || parseInt(direccion.charAt(direccion.length-1))<0 || parseInt(direccion.charAt(direccion.length-1))>9 )){
    enviar=false;
  }//de if
  else{
    for(var i=1;i<direccion.length-1;i++){
      if( (direccion.charAt(i)<"a" || direccion.charAt(i)>"z") &&  (parseInt(direccion.charAt(i))<0 || parseInt(direccion.charAt(i))>9 ) && (masCaracteres.includes(codEmpresa.charAt(i))==false ) ){

      }//de if
    }//de for
  }//de else
  return enviar;
}//de fucntion

//--------------------------------------------------------------------------

//Comprobamos la Localidad

function esLocalidadCorrecta(){
  var localidad=document.primero.Localidad.value.toLowerCase().trim();
  var enviar=true;

  if( (localidad.charAt(0)<"a" || localidad.charAt(0)>"z") || (localidad.charAt(localidad.length-1)<"a" || localidad.charAt(localidad.length-1)>"z") ){
    enviar=false;
  }//de if
  else{
    for(var i=1;i<localidad.length-1;i++){
      if( (localidad.charAt(i)<"a" || localidad.charAt(i)>"z") && (localidad.charAt(i)!=" ") ){
        enviar=false;
      }//de if
    }//de for
  }//de else
  return enviar;
}//de fucntion

//--------------------------------------------------------------------------

//Comprobamos el codigo Postal

function esCodPostalCorrecto(){
  var codPostal=document.primero.CodigoPostal.value.toLowerCase().trim();
  var enviar=true;
  var codProvincia="";
  if( (parseInt(codPostal)<1000 || parseInt(codPostal)>52999) && (isNaN(codPostal)) ){
    enviar=false;
  }//de if
  else{
    codProvincia=codPostal.charAt(0) + codPostal.charAt(1);
    ponerCodProvincia(codProvincia);
  }//de else
  return enviar;
}//de function

//-----------------------------------------------------------------------------------------

function ponerCodProvincia(codigo){

  let tablaProvincias=new Array("Araba/Álava","Albacete","Alicante/Alacant","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón","Ciudad Real",
  "Córdoba","A Coruña","Cuenca","Gerona","Granada","Guadalajara","Guipuzkoa","Huelva","Huesca","Jaén","León","Lérida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Orense","Asturias",
  "Palencia","Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora",
  "Zaragoza","Ceuta","Melilla");
  let valorCodigo=parseInt(codigo,10);
  document.primero.provincia.value=tablaProvincias[valorCodigo-1];
}// de function

//--------------------------------------------------------------------------

function esTelefonoCorrecto(){
  var telefono=document.primero.Telefono.value.trim();
  var enviar=true;
  var numeros=[ "1","2","3","4","5","6","7","8","9","0"];

  if(telefono.length!=9){
    enviar=false;
  }//de if
  else{
    if(telefono.charAt(0)!="9" && telefono.charAt(0)!="6" && telefono.charAt(0)!="7"){
      enviar=false;
    }//de if
    else{
      for(var i=1;i<telefono.length;i++){
        if(numeros.includes(telefono.charAt(i))==false ){
          enviar=false;
        }//de if
      }//de for
    }//de else
  }//de else
  return enviar;
}//de fucntion

//--------------------------------------------------------------------------

//Comprobamos si la fecha es correcta

function esFechaCorrecta(){
  var fecha =document.primero.FechaEmpresa.value.trim();
  var fechaDividida=fecha.split("/");
  var enviar =true;

  if( (fechaDividida[0].length!=1 && fechaDividida[0].length!=2) || (fechaDividida[1].length!=1 && fechaDividida[1].length!=2) || (fechaDividida[2].length!=2 && fechaDividida[2].length!=4) ){
    enviar=false;
  }//de if
  else{
    if( (fechaDividida[1]==1 ||fechaDividida[1]==3 || fechaDividida[1]==5 || fechaDividida[1]==7 || fechaDividida[1]==8 || fechaDividida[1]==10 || fechaDividida[1]==12) && fechaDividida[0]>31){
      enviar=false;
    }//de if

    else if( (fechaDividida[1]==4 ||fechaDividida[1]==6 || fechaDividida[1]==9 || fechaDividida[1]==11) && fechaDividida[0]>30 ){
      enviar=false;
    }//de else if

    else if( (fechaDividida[1]==2) && (fechaDividida[0]>28) && (esAnioBisiesto(fechaDividida[2])==false) ){
      enviar=false;
    }//de else if

    else if((fechaDividida[1]==2) && (fechaDividida[0]>29) && (esAnioBisiesto(fechaDividida[2])==true)){
      enviar=false;
    }//de else if
  }//de else
  return enviar;
}//de function

//---------------------------------------------------------------------------

function esAnioBisiesto(anio){
  if(anio%4==0 && anio%100==0 && anio!=400){
    return false;
  }//de if

  else if(anio%4==0 && anio%100==0 && anio==400){
    return true;
  }

  else if(anio%4==0){
    return true;
  }//de else if

  else{
    return false;
  }
}//de function

//---------------------------------------------------------------------------

function sonCodigosCorrectos(){
  var codBanco=document.primero.CodigoBanco.value.trim();
  var codOficina=document.primero.CodigoOficina.value.trim();
  var enviar=true;
  if(codBanco.length!=4 || codOficina.length!=4){
    enviar=false;
  }//de if
  return enviar;
}//de function

//---------------------------------------------------------------------------

//comprobamso que los digitos de control son correctos

function codigoControlCorrecto(){
  var codigoCorrecto=codigosControl();
  var codigoIntroducido=document.primero.CodigoControl.value.trim();
  if(codigoCorrecto==codigoIntroducido){
    return true;
  }//de if
  else{
    return false;
  }//de else
}//de function

//---------------------------------------------------------------------------

function comprobarIbanCorrecto(){
  var codIbanEx=document.p1.CuentaEx.value.trim();
  var enviar=true;var mensaje="";

  if(document.p1.Pais.value.length!=2){
    enviar=false;
    mensaje+="Debe haber dos letras para identificar el país";
  }//de if
  else{
    var letrasPais=codIbanEx + convertirLetrasIban(document.p1.Pais.value.toLowerCase().trim()) + "00";
    if(letrasPais.length>34){
      enviar=false;
      mensaje="Longitud incorrecta";
    }//de if
    else{
      var resto=parseInt(parseInt(letrasPais)%97);
      if(resto!=1){
        enviar=false;
        mensaje+="IBAN incorrecto";
      }//de if
    }//de else
  }//de else

  if(enviar==false){
    document.p1.IbanEx.value=mensaje;
  }//de if
  else{
    document.p1.IbanEx.value="Iban Correcto";
  }//de else
}//de fucntion

//--------------------------------------------------------------------------
//Convertimos las letras del país a numeros
function convertirLetrasIban(letrasPais){
  var salida="";
  for(var i=0;i<letrasPais.length;i++){
    switch (letrasPais.charAt(i)) {
      case "a":
      salida=salida+"10";
      break;
      case "b":
      salida=salida+"11";
      break;
      case "c":
      salida=salida+"12";
      break;
      case "d":
      salida=salida+"13";
      case "e":
      salida=salida+"14";
      break;
      case "f":
      salida=salida+"15";
      case "g":
      salida=salida+"16";
      break;
      case "h":
      salida=salida+"17";
      case "i":
      salida=salida+"18";
      break;
      case "j":
      salida=salida+"19";
      case "k":
      salida=salida+"20";
      break;
      case "l":
      salida=salida+"21";
      case "m":
      salida=salida+"22";
      break;
      case "n":
      salida=salida+"23";
      case "o":
      salida=salida+"24";
      break;
      case "p":
      salida=salida+"25";
      case "q":
      salida=salida+"26";
      break;
      case "r":
      salida=salida+"27";
      case "s":
      salida=salida+"28";
      break;
      case "t":
      salida=salida+"29";
      case "u":
      salida=salida+"30";
      break;
      case "v":
      salida=salida+"31";
      case "w":
      salida=salida+"32";
      break;
      case "x":
      salida=salida+"33";
      case "y":
      salida=salida+"34";
      break;
      case "z":
      salida=salida+"35";
    }//de switch
  }//de for
  return salida;
}//de fucntion
//--------------------------------------------------------------------------
function ibanEspania(){
  var codCuenta=document.p1.Cuenta.value.trim();
  var mensaje="";var enviar=true;

  if(codCuenta.length!=20){
    enviar=false;
    mensaje+="Longitud del numero de cuenta incorrecto \n";
  }//de if

  else{
    var primeraTransformacion=codCuenta+"142800";
    var resto=parseInt(parseInt(primeraTransformacion)%97);
    var resta=98-resto;

    if(resta<10){
      resta="0"+resta;
    }//de if
  }//de else

  if(enviar==false){
    document.p1.Iban.value=mensaje;
  }//de if
  else{
    document.p1.Iban.value="ES"+resta+codCuenta;
  }//de else
}//de fucntion
//--------------------------------------------------------------------------
function codigosControl(){
  //var numeroBanco=document.primero.Banco.value.trim();
  enviar=true;

  var codigobanco=document.primero.CodigoBanco.value.trim();
  var numeroSucursal=document.primero.CodigoOficina.value.trim();
  var numeroCuenta=document.primero.NumCuenta.value.trim();

  //codigo de Banco
  var sumaCodigoControl=  parseInt(codigobanco.charAt(0))*4 + parseInt(codigobanco.charAt(1))*8 + parseInt(codigobanco.charAt(2))*5 + parseInt(codigobanco.charAt(3))*10;
  var sumaNumeroSucursal= parseInt(numeroSucursal.charAt(0))*9 + parseInt(numeroSucursal.charAt(1))*7 + parseInt(numeroSucursal.charAt(2))*3 + parseInt(numeroSucursal.charAt(3))*6;

  var sumaHastaAhora=sumaCodigoControl + sumaNumeroSucursal;
  var restoNum1Num2=sumaHastaAhora%11;

  var primerDigitoControl=11-restoNum1Num2;

  if(primerDigitoControl==10){
    primerDigitoControl=1;
  }//de if

  if(primerDigitoControl==11){
    primerDigitoControl=0;
  }//de if

  var sumaNumeroCuenta= parseInt(numeroCuenta.charAt(0))*1 + parseInt(numeroCuenta.charAt(1))*2 + parseInt(numeroCuenta.charAt(2))*4 + parseInt(numeroCuenta.charAt(3))*8 +
  parseInt(numeroCuenta.charAt(4))*5 + parseInt(numeroCuenta.charAt(5))*10 + parseInt(numeroCuenta.charAt(6))*9 + parseInt(numeroCuenta.charAt(7))*7+
  parseInt(numeroCuenta.charAt(8))*3 + parseInt(numeroCuenta.charAt(9))*6;

  var restoNum3=sumaNumeroCuenta%11;
  var segundoDigitoControl=11-restoNum3;

  if(segundoDigitoControl==10){
    segundoDigitoControl=1;
  }//de if

  if(segundoDigitoControl==11){
    segundoDigitoControl=0;
  }//de if

  return primerDigitoControl+""+segundoDigitoControl;

}//de fucntion

//-------------------------------------------------------------------------
function queEs(){
  var es="";
  if(esCifCorrecto()==true){
    es="CIF";
  }//de if

  if (esDniCorrecto()==true){
    es="DNI";
  }

  if(esCifCorrecto()==false && esDniCorrecto()==false){
    es="Invalido";
  }
  return es;
}//de function
//--------------------------------------------------------------------

function esCifCorrecto(){
  var cif=document.primero.Dni.value.toLowerCase().trim();
  var enviar = true;
  var mensaje="";
  var digitos=cif.substring(1,8);

  if(cif.length!=9){
    enviar=false;
    mensaje+="El cif introduciodo tine una longitud incorrecta \n";
  }//de cif

  else{
    if(esCifForma1(cif)==false && esCifForma2(cif)==false){
      enviar=false;
      mensaje+="El formato del cif introduciodo es Incorrecto \n";
    }//de if
    else{
      if(digitosCorrectos(cif,digitos)==false){
        enviar=false;
        mensaje+="Los digitos introducidos son incorrectos \n";
      }//de if
    }//de else
  }//de else

  return enviar;
}//de fucntion

//--------------------------------------------------------------------------

//------------COMPROBAMOS SI TIENE LA FORMA 1 O LA FORMA 2

function esCifForma1(cif){
  var letraIncial=cif.charAt(0);
  var caracterControl=cif.charAt(cif.length-1);
  var salida=true;
  var letrasExtras = ["J", "U", "V"];

  if( (letraIncial<"a" || letraIncial>"h") && (letrasExtras.includes(letraIncial)==false) ){
    salida=false;
  }//de if

  else{
    if(isNaN(caracterControl)){
      salida=false;
    }//de if
  }//de else

  return salida;
}//de function forma 1 del cif
//----------------------------------------------------------------------------

function esCifForma2(cif){
  var letraIncial=cif.charAt(0);
  var caracterControl=cif.charAt(cif.length-1);
  var salida=true;
  var letrasExtras = ["P", "Q", "R", "S", "W"];

  if( (caracterControl<"a" || caracterControl>"z") && (letrasExtras.includes(letraIncial)==false) ){
    salida=false;
  }//de if

  return salida;
}//de function forma 2 del cif

//---------------------------------------------------------------------------

//--------------COMPROBAMOS SI LOS DIGITOS INTRODUCIDOS SON digitosCorrectos

function digitosCorrectos(cif ,digitos){
  //vamos a recorrer los impares primero
  var sumaImpares=0;
  var carImpar;
  let resto;
  let cociente;
  let sumaResCoc;

  for(var i=0;i<digitos.length;i=i+2){
    carImpar=parseInt(digitos.charAt(i)*2);
    if(carImpar<=9){
      sumaImpares+=carImpar;
    }//de if

    else{
      cociente=parseInt(carImpar/10);
      resto=parseInt(carImpar%10);
      sumaResCoc=cociente+resto;
      sumaImpares=(sumaResCoc + sumaImpares);
    }//de else
  }//de for
  //Recorremos los impares

  var carPar;
  var sumaPares=0;
  for (var j = 1; j < digitos.length; j+=2) {
    carPar=parseInt(digitos.charAt(j));
    sumaPares+=carPar;
  }//de for

  var sumaTotal=sumaPares+sumaImpares;
  var restoSumaTotal=(sumaTotal%10);
  var complementoADiez=10-restoSumaTotal;

  if(complementoADiez==10){
    complementoADiez=0;
  }//de if

  var salida;

  if( (esCifForma1(cif)==true) && (cif.charAt(cif.length-1)==complementoADiez) ){
    salida=true;
  }//de if

  else if(esCifForma2(cif)){
    var letra=convertirCarControl(complementoADiez);

    if(cif.charAt(cif.length-1)==letra){
      salida=true;
    }//de if
  }//de else if

  else{
    salida=false;
  }
  return salida;
}//de fucntion

//-------------------------------------------------------------------------------

//Convertimos e l caracter de control a letra

function convertirCarControl(numero){
  if(numero==0){
    return "j";
  }//de if
  else if(numero==1){
    return "a";
  }//de else if
  else if(numero==2){
    return "b";
  }//de else if
  else if(numero==3){
    return "c";
  }//de else if
  else if(numero==4){
    return "d";
  }//de else if
  else if(numero==5){
    return "e";
  }//de else if
  else if(numero==1){
    return "f";
  }//de else if
  else if(numero==1){
    return "g";
  }//de else if
  else if(numero==1){
    return "h";
  }//de else if
  else{
    return "i"
  }//de else
}//de function
//--------------------------------------------------------------------------------

//COMPROBAMOS SI ES UN DNI Correcto

function esDniCorrecto(){
  var dni = document.primero.Dni.value.toLowerCase().trim();
  var enviar=true;
  var mensaje="";
  var digitosDNi;
  var resto;
  if(dni.length>9 || dni.length<7){
    enviar =false;
    mensaje+="Longitud de dni incorrecta \n";
  }//de if
  else{
    digitosDNi=parseInt(dni.substring(0,dni.length-1));
    resto = digitosDNi%23;
    var letraDni=calcularLetraDni(resto);

    if(letraDni!=dni.charAt(dni.length-1)){
      enviar=false;
      mensaje+="Letra incorrecta\n";
    }//de if
  }//de else

  return enviar;
}//de function

//----------------------------------------------
//COMPROBAMOS LA LETRA DEL Dni

function calcularLetraDni(numero){
  switch (numero) {
    case 0:
    return "t";
    break;
    case 1:
    return "r";
    break;
    case 2:
    return "w";
    break;
    case 3:
    return "a";
    break;
    case 4:
    return "g";
    break;
    case 5:
    return "m";
    break;
    case 6:
    return "y";
    case 7:
    return "f";
    break;
    case 8:
    return "p";
    break;
    case 9:
    return "d";
    break;
    case 10:
    return "x";
    break;
    case 11:
    return "b";
    break;
    case 12:
    return "n";
    break;
    case 13:
    return "j";
    case 14:
    return "z";
    break;
    case 15:
    return "s";
    break;
    case 16:
    return "q";
    break;
    case 17:
    return "v";
    break;
    case 18:
    return "h";
    break;
    case 19:
    return "l";
    break;
    case 20:
    return "c";
    case 21:
    return "k";
    break;
    case 22:
    return "e";
    break;
  }
}//de numero
