import {useState} from 'react'
import {BalanceI} from '#/interfaces/'
import {getTotal,saveOnDB} from './controller'

export default function AddForm() {
    const [balance, setBalance] = useState<BalanceI>({
        title: '',
        partial: [],
        total: 0
    })
    const [total,setTotal] = useState<number>(0)

    const handleChangeRootInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
       const {name, value} = e.target
         setBalance({...balance, [name]: value})
    }

    const handleChangePartialInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setBalance({...balance, partial: [{value: Number(value), description: 'Partial'}]})
       // setBalance({...balance, partial: [{...balance.partial, [name]: value}]})
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTotal(getTotal(balance.partial))
        console.log(balance)
        const response = await saveOnDB(balance)
        console.log(response)
    }
    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={handleChangeRootInfo}/>
            <label htmlFor="Partial">Partial 1</label>
            <input type="text" name={'Partial'} onChange={handleChangePartialInfo} />
            <label htmlFor="value">Amount</label>
            <input type="number" name="value" onChange={handleChangePartialInfo}/>
            <button type="submit">Submit</button>
            <h3>Total: ${total}</h3>
        </form>
    )
}
