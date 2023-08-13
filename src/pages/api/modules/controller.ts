import { NextApiRequest, NextApiResponse } from "next";
import {BalanceI} from "#/interfaces";
import BalanceModel from "#/database/BalanceShema";

export const save = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body as BalanceI
    console.log(data)
    try {
        const balance = new BalanceModel(data)
        await balance.save()
        return res.status(201).json({message: 'Balance saved successfully'})
    }catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Mongo server error'})
    }
}
