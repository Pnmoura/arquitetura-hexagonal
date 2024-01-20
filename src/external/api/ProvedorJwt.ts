import jwt from 'jsonwebtoken'

export default class ProvedorJwt {
    constructor(private secret: string) {}

    gerar(dados: string | object): string {
        return jwt.sign(dados, this.secret, {
            expiresIn: "1d",
        })
    }

    obter(token: string): string | object {
        return jwt.verify(token, this.secret)
    }
}