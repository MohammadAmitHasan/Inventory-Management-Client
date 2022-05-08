import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = (amount) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://nim-server.herokuapp.com/products?amount=${amount}`)
            .then(data => setProducts(data.data))
    }, [amount])
    return { products, setProducts }
}

export default useProducts;