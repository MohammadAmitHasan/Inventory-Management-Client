import axios from "axios"
import { useEffect, useState } from "react"

const useUpdateStock = (amount) => {
    const [updateStocks, setUpdateStocks] = useState([]);

    useEffect(() => {
        const getUpdateStock = async () => {
            await axios.get(`https://nim-server.herokuapp.com/stockUpdate?amount=${amount}`)
                .then(data => setUpdateStocks(data.data))
        }
        getUpdateStock()
    }, [amount])
    return updateStocks
}

export default useUpdateStock;