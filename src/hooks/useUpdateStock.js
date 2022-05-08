import axios from "axios"
import { useEffect, useState } from "react"

const useUpdateStock = (amount) => {
    const [updateStocks, setUpdateStocks] = useState([]);

    useEffect(() => {
        axios.get(`https://nim-server.herokuapp.com/stockUpdate?amount=${amount}`)
            .then(data => setUpdateStocks(data.data))
    }, [amount])
    return updateStocks
}

export default useUpdateStock;