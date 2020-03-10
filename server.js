//Importações

const express = require("express")
const routers = require("./src/routers.js")

//Instância do Framework Express

const app = express()

//configurando a camada de visão
app.set("view engine", "html")
app.engine("html", require("hbs").__express)
app.set("views",__dirname + "/src/views")

//COnfigurando conteudos estaticos
app.use(express.static(__dirname + "/public"))

//Rotas da aplicação
app.use(routers)

//Escutando a porta 3000
app.listen(3000, () => console.log("A mágica está acontecendo na porta 3000"))