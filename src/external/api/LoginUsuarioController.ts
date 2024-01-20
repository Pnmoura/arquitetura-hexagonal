import LoginUsuario from '@/core/usuario/service/LoginUsuario';
import { Express } from 'express'
import ProvedorJwt from './ProvedorJwt';
import UsuarioMiddleware from './UsuarioMiddleware';

export default class LoginUsuarioController {
    constructor(
        servidor: Express,
        casoDeUso: LoginUsuario
    ) {
        servidor.post('/api/usuarios/login', async (req, res) => {
            try {
                const usuario = await casoDeUso.executar({
                    email: req.body.email,
                    senha: req.body.senha
                })

                const provedorJwt = new ProvedorJwt(process.env.API_SECRET!)
                
                res.status(200).send({
                    // usuario,
                    token: provedorJwt.gerar(usuario)
                    })
            } catch (erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}
