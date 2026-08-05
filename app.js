async function buscarClima() {
  try {
    const ciudad = document.getElementById("idCiudad").value; //obtenes el valor del imput
    const arrayCiudad = ciudad.split(",").map((item) => item.trim()); // convertimos en un array el valor del input

    // obtenemos el timepo en que inicia
    const tiempoInicio = Date.now();

    const promesas = arrayCiudad.map((nombreCiudad) =>
      obtenerClimaDeUnaCiudad(nombreCiudad),
    );

    const resultados = await Promise.all(promesas);

    // obtenemos el timepo en que finaliza promise.all
    const tiempoFin = Date.now();

    const tiempo = tiempoFin - tiempoInicio;
    console.log(tiempo);

    //parte de 2 ontener el timepo de ejecucion pero de manera secuencial para hacer una comparacion

    let tiempoInicioSecuencial = Date.now();

    //recorre con un for
    for (const nombreCiudad of arrayCiudad) {
      await obtenerClimaDeUnaCiudad(nombreCiudad);
    }

    let tiempoFinSecuencial = Date.now();

    const tiempoSecuencial = tiempoFinSecuencial - tiempoInicioSecuencial;

    console.log(`tiempo secuencial: ${tiempoSecuencial}`);

    const mostrarDatos = resultados
      .map(
        (item) =>
          `<p>La temperatura en <strong>${item.nombre}</strong> es de ${item.temperatura} °C</p>`,
      )
      .join("");

    document.getElementById("resultado").innerHTML = mostrarDatos;
  } catch (error) {
    document.getElementById("resultado").innerHTML =
      `<p>No se pudo encontrar la ciudad</p>`;
  }
}

async function obtenerClimaDeUnaCiudad(nombreCiudad) {
  //se pide a la API de geocodificacion las coordenadas de la ciudad ingresada
  const urlGeocoding = `https://geocoding-api.open-meteo.com/v1/search?name=${nombreCiudad}`;
  const response = await fetch(urlGeocoding);
  const data = await response.json();

  //guardamos en una variable el primer resultado
  const coordenadas = data.results[0];

  // en 2 variables guardamos las coordenadas de ubicacion de la ciudad
  const latitud = coordenadas.latitude;
  const logitud = coordenadas.longitude;

  //se le pasa a la API las variables de coordenadas
  const urlCoordenadas = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${logitud}&current_weather=true`;
  const CoordResponse = await fetch(urlCoordenadas);
  const CoorData = await CoordResponse.json();

  return {
    nombre: coordenadas.name,
    temperatura: CoorData.current_weather.temperature,
  };
}

document.getElementById("btnBuscar").addEventListener("click", buscarClima);
