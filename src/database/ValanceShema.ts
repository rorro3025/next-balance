import {Schema} from 'mongoose'
import {BalanceI} from "#/interfaces";
import './config'

const BalanceSchema = new Schema<BalanceI>({
    title: {type: String, required: true},
    partial: [{
        description: {type: String, required: true},
    }],
    total: {type: Number, required: true}
})

export default BalanceSchema


