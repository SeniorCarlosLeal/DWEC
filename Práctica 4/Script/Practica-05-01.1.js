window.onload=inicio;

function inicio(){
  document.primero.onsubmit=comprobarFormulario;
}//de function


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

  if(esCorrectoDocumentoEmpresa()==false){
    mensaje+="CIF/NIF inválidos \n";
    enviar=false;
  }//de if

  if(esDireccionCorrecta()==false){
    mensaje+="La direccion es incorrecta\n";
    enviar=false;
  }//de if

  if(esLocalidadCorrecta()==false){
    mensaje+="La localidad es incorrecta\n";
    enviar=false;
  }//de if

  if(esCodigoPostalCorrecto()==false){
    mensaje+="Codigo Postal Incorrecto\n";
    enviar=false;
  }//de if

  if(esTelefonoCorrecto()==false){
    mensaje+="Teléfono incorrecto\n";
    enviar=false;
  }//de if

  if(esFechaCorrecta()==false){
    mensaje+="Fecha Incorrecta\n";
    enviar=false;
  }

  if(esCorrectoPersonas()==false){
    mensaje+="Debes seleccionar el tipo de persona\n";
    enviar=false;
  }

  if(sectorEconomicoCorrecto()==false){
    mensaje+="Debes seleccionar al menos un sector economico\n";
    enviar=false;
  }//de if

  if(esCorrectoTipoEmpresa()==false){
    mensaje+="Debes seleccionar un tipo de empresa\n";
    enviar=false;
  }//de if

  if(comunidadesCorrectas()==false){
    mensaje+="Debes seleccionar al menos 2 comunidades autonomas\n";
    enviar=false;
  }//de if

  if(datosBanco()==false){
    mensaje+="Codigos incorrectos\n";
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

//---------------------------------------------------------------------------

function esCorrectoApellidosNombre(){
  var nombre = document.primero.ApellidosYNombre.value.toLowerCase().trim();
  var expRegular= /^[a-záéíóúü][a-z0-9ªº\-\.]*[a-z,0-9\.]$/i;

  if(expRegular.test(nombre)==false){
    return false;
  }//de if
  else{
    return true;
  }//de else

}//de function
//---------------------------------------------------------------------------

function esCorrectoCodigoEmpresa(){
  var expRegular=new RegExp("^[a-z0-9]{5,10}$","i");
  var codigoEmpresa=document.primero.CodigoEmpresa.value.toLowerCase().trim();

  if(expRegular.test(codigoEmpresa)==false){
    return false;
  }//de if
  else{
    return true;
  }//de else

}//de function

//--------------------------------------------------------------------------

function esCorrectoDocumentoEmpresa(){
  var documento=document.primero.Documento.value.toLowerCase().trim();
  var expRegularDNI=/^\d{8}[trwagmyfpdxbnkzsqvhlcke]$/i;
  var expRegularCIF1=/^[a-hjuv]\d{7}\d$/i;
  var expRegularCIF2=/^[pqrsw]\d{7}[a-z]$/i;

  var enviar=false;

  if( (expRegularDNI.test(documento)==true) && (esDniCorrecto(documento)==true)){
    enviar=true;
  }//de if

  else if ( (expRegularCIF1.test(documento)==true) && (digitosCorrectos(documento,documento.substring(1,8),0)==true ) ){
    console.log(documento.substring(1,8));
    enviar=true;
  }

  else if ( (expRegularCIF2.test(documento)==true) && (digitosCorrectos(documento,documento.substring(1,8),1)==true )){
    enviar=true;
  }
  return enviar;
}//de fucntion

//--------------------------------------------------------------------------

function esDniCorrecto(dni){

  var enviar=true;
  var digitosDNi=parseInt(dni.substring(0,dni.length-1));
  var  resto = digitosDNi%23;
  var letraDni=calcularLetraDni(resto);

  if(letraDni!=dni.charAt(dni.length-1)){
    enviar=false;
  }//de if
  return enviar;
}//de function

//-----------------------------------------------------------------------------

function calcularLetraDni(numero){
  var letras = new Array("t","r","w","a","g","m","y","f","p","d","x","b","n","j","z","s","q","v","h","l","c","k","e");
  return letras[numero];
}//de fucntion

//-----------------------------------------------------------------------------

function digitosCorrectos(cif,digitos,forma){
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
  //Recorremos los pares

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

  if( forma==0 && (cif.charAt(cif.length-1)==complementoADiez) ){
    salida=true;
  }//de if

  else if(forma==1){
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
  var letras= new Array("j","a","b","c","d","e","f","g","h","i");
  return letras[numero];
}//de function

//-----------------------------------------------------------------------------

function esDireccionCorrecta(){
  var direccion=document.primero.Direccion.value.toLowerCase().trim();

  var expRegular=new RegExp("^[a-záéíóúü](\\w)|([ªº\\-\\.\\\\])*[a-záéíóúü0-9]$","i");

  if(expRegular.test(direccion)==false){
    return false;
  }//de if
  else{
    return true;
  }//de else
}//de fucntion

//----------------------------------------------------------------------------

function esLocalidadCorrecta(){
  var localidad = document.primero.Localidad.value.toLowerCase().trim();

  var expRegular=/^[a-záéíóúü][a-záéíóúü ]*[a-záéíóúü]$/i;

  if(expRegular.test(localidad)==false){
    return false;
  }//de if

  else{
    return true;
  }//de else
}//de function

//--------------------------------------------------------------------------

function esCodigoPostalCorrecto(){
  var codPostal = document.primero.CodigoPostal.value.trim();

  var expRegular =new RegExp("^((0?[1-9])|([1-4]\\d)|(5[012]))\\d{3}$","i");
  var salida;
  if(expRegular.test(codPostal)==false){
    salida=false;
  }//de if

  else{
    var codigo=codPostal.charAt(0)+codPostal.charAt(1);
    ponerCodProvincia(codigo);
    salida=true;
  }//de else
  return salida;
}
//---------------------------------------------------------------------------

function ponerCodProvincia(codigo){

  let tablaProvincias=new Array("Araba/Álava","Albacete","Alicante/Alacant","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón","Ciudad Real",
  "Córdoba","A Coruña","Cuenca","Gerona","Granada","Guadalajara","Guipuzkoa","Huelva","Huesca","Jaén","León","Lérida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Orense","Asturias",
  "Palencia","Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora",
  "Zaragoza","Ceuta","Melilla");
  let valorCodigo=parseInt(codigo,10);
  document.primero.provincia.value=tablaProvincias[valorCodigo-1];
}// de function

//-------------------------------------------------------------------------------------

function esTelefonoCorrecto(){
  var telefono=document.primero.Telefono.value.trim();
  var expRegular=/^[967]\d{8}$/i;

  if(expRegular.test(telefono)==false){
    return false;
  }//de if

  else{
    return true;
  }//de else
}//de fucntion

//----------------------------------------------------------------------------

function esFechaCorrecta(){
  var fecha = document.primero.FechaEmpresa.value.toLowerCase().trim();
  var expRegular=/^(((((0?[1-9])|([12]\d)|(3[01]))[\-\/]((0?[13578])|(1[02])))|(((0?[1-9])|([12]\d)|(30))[\-\/]((0?[469])|(11))))[\-\/]\d{4})|((((0?[1-9])|[12]\d))[\-\/]0?2[\-\/](\d{2}(([2468][048])|([13579][26])|(0[48]))|((([02468][048])|([13579][26]))00)))|(((0?[1-9])|(1\d)|(2[0-8]))[\-\/]0?2[\-\/]((\d{2}(([02468][1235679])|([13579][01345789])))|(([02468][1235679])|([13579][01345789]))00))$/;

  if(expRegular.test(fecha)==false){
    return false;
  }//de if

  else{
    return true;
  }//de else
}//de functin

//--------------------------------------------------------------------------

function esCorrectoPersonas(){
  if(document.primero.provin[0].checked==true || document.primero.provin[1].checked ){
    return true;
  }//de if

  else{
    return false;
  }
}//de fyucntion

//----------------------------------------------------------------------

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

//-------------------------------------------------------------------------

function esCorrectoTipoEmpresa(){
  if(document.primero.empresa[0].checked || document.primero.empresa[1].checked || document.primero.empresa[2].checked
    || document.primero.empresa[3].checked || document.primero.empresa[4].checked || document.primero.empresa[5].checked){
    return true;
  }//de if

  else{
    return false;
  }
}//de function

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

function datosBanco(){
  var codigoBanco=document.primero.CodigoBanco.value.trim();
  var codigoOficina=document.primero.CodigoOficina.value.trim();
  var codigoControl=document.primero.CodigoControl.value.trim();
  var iban=document.primero.IBAN.value.toLowerCase().trim();
  var numCuenta=document.primero.value.trim();

  var expRegular=new RegExp("^\\d{4}$","i");
  var expRegularControl=new RegExp("^\\d{2}$,i");
  var expRegularIBAN=new RegExp("^[a-z]{2}\\d{8},i");
  var expRegularNumCuenta=new RegExp("^\\d{10}$,i");

  if(expRegular.test(codigoBanco)==false || expRegular.test(codigoOficina)==false || expRegularControl.test(codigoControl)==false || expRegularIBAN.test(iban)==false
   || expRegularNumCuenta.test(numCuenta)==false){
    return false;
  }//de if

  else{
    return true;
  }//de else

}//de fucntion
