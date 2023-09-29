const express = require ("express");


let puerto = process.env.PORT || 4000;

const servidor = express();

servidor.get("/", (peticion, respuesta) => {
    let [r,g,b] = [0,0,0](() => Math.floor(Math.random() * 256));
    respuesta.json({r,g,b});
});

servidor.use((peticion,respuesta) => {
    respuesta.status(404);
    respuesta.send("NOT FOUND...");
});


servidor.listen(puerto);