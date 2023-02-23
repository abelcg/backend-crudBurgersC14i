import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/crudBurgers' //localhost = 127.0.0.1

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
 console.log('BD Conectada');
});
