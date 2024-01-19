import Usuario from "../../core/usuario/model/Usuario";
import db from "./db";

export default class RepositorioUsuarioPg {


    async inserir(usuario: Usuario) {
        await db.query(`
            INSERT INTO usuarios (id, nome, email, senha) 
                VALUES ($1, $2, $3, $4)`, 
            [
                usuario.id, 
                usuario.nome, 
                usuario.email, 
                usuario.senha
            ]
        )
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const usuario = await db.oneOrNone(
            'SELECT * FROM usuarios where email = $1', 
            [email]
            )
        if(!usuario) return null
        return usuario
    }
}