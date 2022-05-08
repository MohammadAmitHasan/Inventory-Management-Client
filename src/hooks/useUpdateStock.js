import axios from "axios"
import { useEffect, useState } from "react"

const useUpdateStock = (amount) => {
    const [updateStocks, setUpdateStocks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/stockUpdate?amount=${amount}`)
            .then(data => setUpdateStocks(data.data))
    }, [amount])
    return updateStocks
}

export default useUpdateStock;