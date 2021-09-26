const mongoose = require('mongoose');

const dbConnection = async ()=> {
  
  try {
    await mongoose.connect( process.env.MONGODB_CNN, {useNewUrlParser: true});

    console.log("Base de Datos Conectada");
    
  } catch (error) {
    console.log(error);
    throw new Error("Error... Base de Datos NO Conectada");
    
  }
}

module.exports={
  dbConnection
}


