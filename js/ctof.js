//pedir al usuario los grados celsius en su localidad
//convertir °C a °F
let gradosLocalidadKoder = prompt("Dame los °C de tu localidad", 15);
if (gradosLocalidadKoder === null)
  console.log("Necesitas especificar los °C de tu localidad");
else {
  console.log(gradosLocalidadKoder);
  let gradosLocalidadKoderInt = parseInt(gradosLocalidadKoder);
  let gradosCelsiusAFarenheit = gradosLocalidadKoderInt * (9 / 5) + 32;
  alert(`La temperatura actual es de ${gradosCelsiusAFarenheit}°F`);
}
