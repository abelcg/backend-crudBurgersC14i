import express from 'express'

//console.log('estoy en mi backend');


//crear la instancia de Express
const app = express();

//crear un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=> {

    console.log('*********************************');
    console.log('Estoy en el puerto ' + app.get('port'));
    console.log('*********************************'); 

});


//Rutas
app.get('/', (req, res) => {
    res.send('esto es una prueba desde el backend')
});


app.delete('/borrarAlgo', (req, res) => {
    res.send('se borró algo')
});
