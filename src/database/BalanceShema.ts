import {Schema,model} from 'mongoose'
import {BalanceI} from "#/interfaces";
import './config'

const BalanceSchema = new Schema<BalanceI>({
    title: String,
    partial: [{
        description: {type: String, required: true},
        value: {type: Number, required: true}
    }],
    total: {type: Number, required: true}
}, {
    timestamps: true
})

const BalanceModel = model<BalanceI>('Balances', BalanceSchema)
export default BalanceModel


