import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = (amount) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/products?amount=${amount}`)
            .then(data => setProducts(data))
    }, [])
    return { products }
}

export default useProducts;