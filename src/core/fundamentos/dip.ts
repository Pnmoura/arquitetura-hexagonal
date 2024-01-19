import TerminalUtil from "@/app/util/TerminalUtil";
import corrida from "./Corrida";
import Ferrari from "./Ferrari";
import Carro from "./Carro";
import Fusca from "./Fusca";
import Civic from "./Civic";
import { terminal } from "terminal-kit";

export default async function dip() {
    TerminalUtil.titulo('DIP')

    const [tipo] = await TerminalUtil.selecao("Tipo de carro?", [
        "Fusca", "Civic", "Ferrari"
    ])

    let carro: Carro
    switch(tipo) {
        case 0: 
        carro = new Fusca()
        break
        case 1: 
        carro = new Civic()
        break
        default:
            carro = new Ferrari()
            break
    }

    corrida(carro, terminal.green)
    await TerminalUtil.esperarEnter()
}