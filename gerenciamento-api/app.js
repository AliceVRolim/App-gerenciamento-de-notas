//arquivo base que conecta com o bd e inicializa o app
const express = require('express')// importando o express
const mongoose = require('mongoose');
require("dotenv").config();


const notasRouter = require('../gerenciamento-api/src/routes/notasRoutes');

const PORT = process.env.PORT || 3001
const app = express()//criando a instância do express
const URI = process.env.MONGO_URI //conexão do mongodb

mongoose.connect(URI,//conectando ao mongodb
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  },
  (err) =>{
    if (err) {
      console.log(err);
    } else {
      console.log(`connected to mongodb : ${URI}`);
    }
  }

);

app.use(express.json());
app.use("/api/notas", notasRouter);



const cors=require("cors");
app.use(cors())


app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
})



