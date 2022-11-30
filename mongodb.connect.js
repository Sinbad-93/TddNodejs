// variables d'environnement
require("dotenv").config();
const mongoose = require('mongoose');

async function connect(){
    try {
        let mongoConnection = await mongoose
        .connect(process.env.MONGOGUEST, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        if(mongoConnection){
            console.log("Connexion à MongoDB réussie !");
        }
        
    } catch (error) {
        console.error("Connexion à MongoDB échouée !")
        console.error(error);
    }
}


/* Another way
function connect(){
    mongoose
    .connect(process.env.MONGOGUEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((error) => console.log("Connexion à MongoDB échouée !" + error));
}
*/

module.exports = { connect };