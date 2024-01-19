import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import TerminalUtil from "../util/TerminalUtil";
import Usuario from "@/core/usuario/model/Usuario";
import RepositorioUsuarioPg from "@/adapter/db/RepositorioUsuarioPg";

export default async function registrarUsuario() {
    const { campoRequerido, titulo, sucesso, erro, esperarEnter } = TerminalUtil
    
    titulo("Registrar Usuário")
    
    const nome = await campoRequerido('Nome: ')
    const email = await campoRequerido('Email: ')
    const senha = await campoRequerido('Senha: ')

    const usuario: Usuario = { nome, email, senha }


    try {
        const repositorio = new RepositorioUsuarioPg()
        const provedorCripto = new SenhaCripto()
        const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto)

        await casoDeUso.executar(usuario)

        sucesso('Usuário registrado com sucesso')
    } catch (e: any) {
        erro(e.message)
    } finally {
        await esperarEnter()
    }
}