import {BalanceI} from "#/interfaces";

export const getTotal = (arr: { description: string, value: number }[]): number => {
    arr.length === 0 && arr.push({description: '', value: 0})
    return arr.reduce((acc, el) => acc + el.value, 0)
}

export const saveOnDB = async (data: BalanceI) => {
    const response = await fetch('/api/modules/balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    return await response.json()
}