export default interface ProvedorCriptografia {
    criptografar(texto: string): string
    comparar(senha: string, senhaCriptografada: string): boolean
}