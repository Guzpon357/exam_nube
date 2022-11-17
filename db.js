//import mongoose from "mongoose";
const mongoose = require('mongoose');

const MONGO_USERNAME = 'root';
const MONGO_PASSWORD = 'root';
const MONGO_HOSTNAME = '127.0.0.1';

const url =`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.0zbsya1.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'));
db.once('open', function callback(){
    console.log("¡Conectado a MongoDB!");
});

module.exports = db