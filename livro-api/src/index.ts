import express from "express"
import bodyParser from "body-parser";
import Routes from "./routes/livros"
import cors from "cors"


const app = express();

const porta = 4000;

app.use(bodyParser.json())
app.use(cors())
app.use("/", Routes)

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
}
)