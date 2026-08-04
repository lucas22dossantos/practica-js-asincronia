# Buscador de Clima — Práctica de Asincronía en JavaScript

## Objetivo del proyecto

Este proyecto **no es una app de clima** — es una práctica enfocada en entender y aplicar
programación asíncrona en JavaScript. El clima es solo la excusa (una API pública gratuita
que permite practicar sin necesidad de backend propio ni autenticación).

El objetivo real es reforzar:

- `async` / `await`
- Manejo de errores con `try` / `catch` en contextos asíncronos
- Ejecución de múltiples peticiones en paralelo con `Promise.all`
- Diferencia entre ejecución secuencial vs paralela (tiempos de espera)
- Manipulación del DOM a partir de datos obtenidos de una API externa

## Tecnologías

- HTML
- CSS (básico, sin frameworks)
- JavaScript (sin librerías ni frameworks — JS puro, "vanilla")
- API externa: [Open-Meteo](https://open-meteo.com/) (gratuita, sin API key)

## Funcionalidades

### Nivel 1 — Búsqueda simple

- [x] Input de texto para ingresar el nombre de una ciudad
- [x] Botón "Buscar"
- [x] Al buscar, mostrar en pantalla: temperatura actual y descripción del clima
- [x] Manejo de error si la ciudad no existe o falla la conexión (try/catch)

### Nivel 2 — Búsqueda múltiple en paralelo

- [x] Permitir ingresar varias ciudades separadas por coma
- [x] Pedir el clima de todas las ciudades **en paralelo** usando `Promise.all`
- [ ] Mostrar comparativamente el tiempo que tarda esto vs. hacerlo uno por uno (secuencial),
      para evidenciar en la práctica la diferencia que se estudió en la teoría

### Nivel 3 — Extra

- [ ] Historial de búsquedas (en memoria, con un array de JS)
- [ ] Indicador de carga ("Cargando...") mientras se espera la respuesta de la API

## Por qué cada parte practica un concepto de asincronía

| Funcionalidad                | Concepto que practica                                  |
| ---------------------------- | ------------------------------------------------------ |
| Fetch de una ciudad          | `async`/`await` básico                                 |
| Manejo de ciudad inexistente | `try`/`catch`                                          |
| Búsqueda de varias ciudades  | `Promise.all` (paralelismo)                            |
| Comparación de tiempos       | Entender por qué paralelo es más rápido que secuencial |
| Indicador de carga           | Sincronizar estado de UI con una operación asíncrona   |

## Estructura de archivos (a definir mientras se construye)

```
/
├── index.html
├── style.css
├── app.js
└── README.md
```
