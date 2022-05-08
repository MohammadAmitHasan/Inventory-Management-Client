import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = (amount) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await axios.get(`https://nim-server.herokuapp.com/products?amount=${amount}`)
                .then(data => setProducts(data.data))
        }
        getData()

    }, [amount])
    return { products, setProducts }
}

export default useProducts;