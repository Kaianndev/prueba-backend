const {MongoClient} = require("mongodb")

const urlConexion = process.env.URL_MONGO // ja nao se pode ler localmente aasim
function conectar (){
    return MongoClient.connect(urlConexion);       
}

function colores(){
    return new Promise(async callBack => {
        let conexion = await conectar();
        let coleccion = conexion.db("colores").collection("colores");
        let colores = await coleccion.find({}).toArray();

        conexion.close();
        callBack(colores);
    })
    
}

module.exports = {colores};