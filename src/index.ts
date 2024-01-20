import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario'
import RepositorioUsuarioPg from './external/db/RepositorioUsuarioPg'
import SenhaCripto from './external/auth/SenhaCripto'
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController'
import LoginUsuario from './core/usuario/service/LoginUsuario'
import LoginUsuarioController from './external/api/LoginUsuarioController'
import ObterProdutoPorId from './core/produto/service/ObterProdutoPorId'
import ObterProdutoPorIdController from './external/api/ObterProdutoPorIdController'
import UsuarioMiddleware from './external/api/UsuarioMiddleware'


const app = express()
const porta = process.env.API_PORTA ?? 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(porta, () => {
    console.log(`🚀 Servidor executando na porta ${porta}`)
})

// -------------------------------- Rotas Abertas -------------------------------- //

const repositorioUsuario = new RepositorioUsuarioPg()
const provedorCripto = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(repositorioUsuario, provedorCripto)
const loginUsuario = new LoginUsuario(repositorioUsuario, provedorCripto)

new RegistrarUsuarioController(app, registrarUsuario)
new LoginUsuarioController(app, loginUsuario)

// -------------------------------- Rotas Protegidas -------------------------------- //

const usuarioMid = UsuarioMiddleware(repositorioUsuario)


const obterProdutoPorId = new ObterProdutoPorId()
new ObterProdutoPorIdController(app, obterProdutoPorId, usuarioMid)

