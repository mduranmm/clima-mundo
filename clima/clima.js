const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=/API/&lat=${lat}&lon=${lng}&units=metric`)
    return resp.data.main.temp
}

module.exports = {
    getClima
}