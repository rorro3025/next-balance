import {NextApiRequest, NextApiResponse } from 'next';
import {save} from '../controller'

export default function handler (req:NextApiRequest, res:NextApiResponse) {
    const {method} = req

    switch (method) {
        case 'GET':
            res.status(200).json({message: 'GET'})
            break
        case 'POST':
            return save(req, res)
    }
}
