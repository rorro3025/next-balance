import { PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { save } from "../controllers/rows";

interface PartialI {
    title: string
    amount: number
}

export interface SaveRowI {
    partials: Array<PartialI>
    category: string
    title: string,
}

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export enum types {
    services = 'Servicios',
    transport = 'Pasajes',
    market = 'Supermercado',
    school = 'Escuela',
}

interface RowInformationI extends SaveRowI {
    id: number,
    date: string,
    month: number
    day: number
    addToDB: () => Promise<string>
}

export class Row implements RowInformationI {
    readonly now = new Date()
    date: string = this.now.toLocaleDateString();
    day: number = this.now.getUTCDate() - 1;
    id: number = this.now.getTime();
    category: string;
    month: number = this.now.getMonth() + 1;
    partials: Array<PartialI>;
    title: string;

    constructor(title: string, partials: PartialI[], category: string) {
        this.title = title
        this.category = category
        this.partials = partials
    }

    async addToDB() {
        const params: PutCommandInput = {
            TableName: "Balance",
            Item: {
                id: this.id,
                title: this.title,
                date: this.date,
                category: this.category,
                partials: this.partials,
                month: this.month,
                day: this.day
            }
        }
        const response = await save(params)
        console.log(response)
        return response
    }
}
