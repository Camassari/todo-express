import express from "express"
import router from "./router.js"
const app = express()
const porta = 3000

app.use(router)

app.listen(porta, (erro) => {
    if(erro) {
        console.log(erro)
        return
    }
    console.log(`Ouvindo na porta ${porta}`)
})