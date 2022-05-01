import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(data => setProduct(data.data))
    }, [product])

    // Handle delivered button action
    const handleDelivered = (e) => {
        e.preventDefault()
        const amount = e.target.itemsDelivered.value;
        e.target.reset();

        // Send a put request to the server to reduce the stock
        axios.put(`http://localhost:5000/updateStock/${id}`, {
            quantity: product.quantity - (+amount)
        })
            .then(res => console.log(res))
        toast(`${amount} ${product.unit_name} ${product.name} Delivered`)
    }

    // Handle added to stock item 
    const handleAddToStock = (e) => {
        e.preventDefault()
        const amount = e.target.addedInStock.value;
        e.target.reset();

        // Send a put request to the server to reduce the stock
        axios.put(`http://localhost:5000/updateStock/${id}`, {
            quantity: product.quantity + (+amount)
        })
            .then(res => console.log(res))

        toast(`${amount} ${product.unit_name} ${product.name} Added in stock`)
    }

    return (
        <div className='container mx-auto my-5 p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                {/* product details display */}
                <div className='p-2 rounded-lg shadow-md shadow-purple-300 max-w-sm mx-auto'>
                    <img src={product.img} alt="product" className='rounded-lg w-full' />
                    <div className='p-2'>
                        <h3 className='text-2xl my-2 font-semibold text-red-400'>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Supplier: {product.supplier}</p>
                        <h5 className='text-lg my-2'>Price: <span className='text-orange-400 font-semibold'>Tk {product.price}</span></h5>
                        <h5 className='text-lg'>In Stock: <span className='text-orange-400 font-semibold'>{product.quantity} {product.unit_name}</span></h5>
                    </div>
                </div>

                {/* Update Stock Display */}
                <div>
                    {/* Items Delivered section */}
                    <div className='my-6 p-5 border-2 border-purple-400 rounded-lg'>
                        <h3 className='text-3xl font-semibold text-red-400 text-center mb-3'>Delivered Items</h3>
                        <form onSubmit={handleDelivered}>
                            <input type="number" name="itemsDelivered" id="itemsDelivered" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Amount of Items Delivered' required autoComplete='off' />

                            <button className='bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-full text-lg font-semibold my-2' type='submit'>Delivered</button>
                        </form>
                    </div>

                    {/* Add items in stock section */}
                    <div className=' p-5 border-2 border-purple-400 rounded-lg'>
                        <h3 className='text-3xl font-semibold text-red-400 text-center mb-3'>Update Stock</h3>
                        <form onSubmit={handleAddToStock}>
                            <input type="number" name="addedInStock" id="addedInStock" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Amount of Items added in stock' required autoComplete='off' />

                            <button className='bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-full text-lg font-semibold my-2' type='submit'>Add To Stock</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;