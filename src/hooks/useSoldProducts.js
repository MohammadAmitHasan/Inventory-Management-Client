import axios from "axios"
import { useEffect, useState } from "react"

const useSoldProducts = (amount) => {
    const [soldProducts, setSoldProducts] = useState([]);

    useEffect(() => {
        const getSoldProducts = async () => {
            await axios.get(`https://nim-server.herokuapp.com/soldProducts?amount=${amount}`)
                .then(data => setSoldProducts(data.data))
        }
        getSoldProducts()

    }, [amount])
    return { soldProducts, setSoldProducts }
}

export default useSoldProducts;