const express = require ("express");
const cors = require ("cors");
const {colores} = require("./db");

let puerto = process.env.PORT || 4000;

const servidor = express();

servidor.use(cors());

servidor.use("/prueba", express.static("./estaticos"));

// esse metodo insere e faz espaunar uma cor em json

servidor.get("/", async (peticion, respuesta) => {
    let listaColores = await colores();
    respuesta.json(listaColores[Math.floor(Math.random() * listaColores.length)]);
});

//servidor.get("/", (peticion, respuesta) => {
   // let [r,g,b] = [0,0,0].map(() => Math.floor(Math.random() * 256));
    //respuesta.json({r,g,b});
// });

servidor.use((peticion,respuesta) => {
    respuesta.status(404);
    respuesta.send("NOT FOUND...");
});


servidor.listen(puerto);



