const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedURL = encodeURI(dir);
    const instancia = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedURL}&APPID=/API/`,
    });

    const respuesta = await instancia.get();

    if (respuesta.data.code === 404) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = respuesta.data;
    const direccion = `${data.name}, ${data.sys.country}`
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return { direccion, lat, lng }
}

module.exports = { getLugarLatLng }