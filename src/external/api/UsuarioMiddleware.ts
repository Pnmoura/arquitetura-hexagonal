import { Request, Response, NextFunction } from "express"
import ProvedorJwt from "./ProvedorJwt"
import Usuario from "@/core/usuario/model/Usuario"
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario"

export default function UsuarioMiddleware(repositorio: RepositorioUsuario) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const acessoNegado = () => res.status(403).send('Token invalido')

        const token = req.headers.authorization?.replace('Bearer ', '')
        if(!token) {
            acessoNegado()
            return
        }

        const provedorJWT = new ProvedorJwt(process.env.API_SECRET!)

        const usuarioToken = provedorJWT.obter(token) as Usuario
        const usuario = await repositorio.buscarPorEmail(usuarioToken.email)

        if(!usuario) {
            acessoNegado()
            return
        }

        (req as any).usuario = usuario
        next()
    }
}