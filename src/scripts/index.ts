import { Row } from "./interfaces";
import { types } from "./interfaces";


const pFijos = new Row('Pago se servicios fijos', [
    { title: 'Tidal', amount: 99 },
    { title: 'HBO', amount: 125.3 },
    { title: 'Meli+ (disneyplus, startplus)', amount: 100 }
], types.services)

const transportVar = new Row('Pasaje minimo', [
    { title: 'Camion 1', amount: 15 },
    { title: 'Camion 2', amount: 15 }
], types.transport)


async function main() {
    console.log('wait please')
    await transportVar.addToDB()
}

main()
