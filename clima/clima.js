const axios = require('axios');



const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f977412514aefccd30392fd9d0daacf8`);

    return {
        actual: resp.data.main.temp,
        min: resp.data.main.temp_min,
        max: resp.data.main.temp_max
    }
}

module.exports = {
    getClima
}