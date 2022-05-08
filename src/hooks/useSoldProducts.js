import axios from "axios"
import { useEffect, useState } from "react"

const useSoldProducts = (amount) => {
    const [soldProducts, setSoldProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/soldProducts?amount=${amount}`)
            .then(data => setSoldProducts(data.data))
    }, [amount])
    return { soldProducts, setSoldProducts }
}

export default useSoldProducts;