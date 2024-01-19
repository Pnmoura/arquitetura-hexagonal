import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from 'terminal-kit'
import polimorfismo from "../fundamentos/polimorfismo";
import dip from "@/core/fundamentos/dip";

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos')

    const [indice] = await TerminalUtil.menu([
        '1. Polimorfismo',
        '2. DIP',
        'Voltar'
    ])

    switch(indice) {
        case 0:
            await polimorfismo()
            break
        case 1: 
            await dip()
            break;
        default: return
    }

    await menuFundamentos()
}