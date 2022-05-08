import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(data => setProduct(data.data))
    }, [product, id])

    // Handle delivered button action
    const handleDelivered = (e) => {
        e.preventDefault()
        const amount = e.target.itemsDelivered.value;
        e.target.reset();

        // Send a put request to the server to reduce the stock
        axios.put(`http://localhost:5000/updateStock/${id}`, {
            quantity: product.quantity - (+amount)
        })
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    toast(`${amount} ${product.unit_name} ${product.name} Delivered`)
                }
            })

        // send the sold data to server
        const totalPrice = product.price * amount;
        const today = new Date().toDateString();
        axios.post('http://localhost:5000/sold', {
            img: product.img,
            name: product.name,
            amount,
            unitName: product.unit_name,
            totalPrice,
            date: today
        })
            .then(res => console.log(res))
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
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    toast(`${amount} ${product.unit_name} ${product.name} Added in stock`)
                }
            })

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
                <div className='text-center'>
                    {/* Items Delivered section */}
                    <div className='my-6 p-5 border-2 border-purple-400 rounded-lg'>
                        <h3 className='text-3xl font-semibold text-red-400 mb-3'>Delivered Items</h3>
                        <form onSubmit={handleDelivered}>
                            <input type="number" name="itemsDelivered" id="itemsDelivered" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Amount of Items Delivered' required autoComplete='off' />

                            <button className='bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-full text-lg font-semibold my-2' type='submit'>Delivered</button>
                        </form>
                    </div>

                    {/* Add items in stock section */}
                    <div className=' p-5 border-2 border-purple-400 rounded-lg'>
                        <h3 className='text-3xl font-semibold text-red-400 mb-3'>No. Of New Items</h3>
                        <form onSubmit={handleAddToStock}>
                            <input type="number" name="addedInStock" id="addedInStock" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Amount of Items added in stock' required autoComplete='off' />

                            <button className='bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-full text-lg font-semibold my-2' type='submit'>Add To Stock</button>
                        </form>
                    </div>
                    <Link className='text-lg px-5 mt-5 py-2 w-60 mx-auto rounded-full flex font-semibold justify-center items-center bg-red-600 hover:bg-red-700' to={'/manageProducts'}>Manage Inventories
                        <ArrowNarrowRightIcon className='w-5 h-5 ml-2 mt-1'></ArrowNarrowRightIcon>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;