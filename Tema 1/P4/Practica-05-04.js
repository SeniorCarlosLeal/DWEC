  function convertir(){
    var num=parseInt(document.getElementById('Decimal').value);
    document.p4.Binario.value=aBinario(num);
    document.p4.Octal.value=aOctal(num);
    document.p4.Hexadecimal.value=aHexadecimal(num);
  }

  function aBinario(numero){
    let num=numero; let resto; let salida="";
    while(num>=1){
      resto=parseInt(num%2);
      salida=resto+salida;
      num=parseInt(num/2);
  }//de while
  return salida;
  }//de function

  function aOctal(numero){
    let num=numero;let resto; let salida="";

    while(num>=1){
      resto=parseInt(num%8);
      salida=resto+salida;
      num=parseInt(num/8);
    }//de while
    return salida;
  }//de function

  function aHexadecimal(numero){
    let num=numero;let resto; let salida="";

    while(num>=1){
      resto=parseInt(num%16);
      if(resto>=10){
        resto=letras(resto);
      }//de if
      salida=resto+salida;
      num=parseInt(num/16);
    }//de while
    return salida;
  }//de function

  function letras(numero){
    if(numero==10){
      return "A";
    }//de if
    else if (numero==11){
        return "B";
    }
    else if (numero==12){
        return "C";
    }
    else if (numero==13){
        return "D";
    }
    else if (numero ==14){
        return "E";
    }
    else{
      return "F";
    }

  }//de function
