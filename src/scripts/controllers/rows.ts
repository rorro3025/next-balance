import {ddbDocumentClient} from "../config"
import {PutCommand, PutCommandInput} from '@aws-sdk/lib-dynamodb'
export const save = async (params: PutCommandInput) => {
    try {
        await ddbDocumentClient.send(new PutCommand(params))
        return 'saved'
    } catch (e) {
        const {message} = e as unknown as Error
        return message
    }
}

