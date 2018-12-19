const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    },
    clima: {
        alias: 'c',
        desc: 'Clima de la ciudad especificada'
    }
}).argv;


const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);
    return temp;
}

getInfo(argv.direccion)
    .then(temp => {
        console.log(`=== Temperatura de ${argv.direccion}===`);
        console.log(`===  Actual: ${temp.actual}`);
        console.log(`===  Minima: ${temp.min}`);
        console.log(`===  Maxima: ${temp.max}`);
        console.log(`============================`);
    })
    .catch(e => console.log(e));