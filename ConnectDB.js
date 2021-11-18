const mongoose = require ('mongoose')

const DB_URI = process.env.SCALINGO_MONGO_URL || 'mongodb://localhost:27017/monsite-portfolio'
mongoose.connect(DB_URI).then(()=>{
    console.log("Connecté à la base de données");
})