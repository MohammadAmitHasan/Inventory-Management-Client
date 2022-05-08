import axios from "axios"
import { useEffect, useState } from "react"

const useSoldProducts = (amount) => {
    const [soldProducts, setSoldProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://nim-server.herokuapp.com/soldProducts?amount=${amount}`)
            .then(data => setSoldProducts(data.data))
    }, [amount])
    return { soldProducts, setSoldProducts }
}

export default useSoldProducts;