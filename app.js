async function buscarClima() {
  const ciudad = document.getElementById("idCiudad").value;

  const urlGeocoding = `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}`;
  const response = await fetch(urlGeocoding);
  const data = await response.json();

  //   console.log(data);

  const coordenadas = data.results[0];

  //   console.log(coordenadas);

  const latitud = coordenadas.latitude;
  const logitud = coordenadas.longitude;

  const urlCoordenadas = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${logitud}&current_weather=true`;
  const CoordResponse = await fetch(urlCoordenadas);
  const CoorData = await CoordResponse.json();

  //   console.log(CoorData);

  let mostrarDatos = `<p>La temperatura en <strong>${coordenadas.name}</strong> es de ${CoorData.current_weather.temperature} °C</p>`;

  document.getElementById("resultado").innerHTML = mostrarDatos;
}

document.getElementById("btnBuscar").addEventListener("click", buscarClima);
