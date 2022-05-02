import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const unit_name = e.target.unit_name.value;
        const category = e.target.category.value;
        const supplier = e.target.supplier.value;
        const img = e.target.img.value;
        const item = { name, description, price, quantity, unit_name, category, supplier, img, userEmail: user.email }

        // Post data to server
        axios.post('http://localhost:5000/addItem', item)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Item Added Successfully')
                    e.target.reset();
                }
            })
    }

    return (
        <div className='container mx-auto mb-5 p-5'>

            <div className='text-center max-w-md mx-auto shadow-lg shadow-purple-500 p-5 rounded-lg'>
                <h3 className='text-red-400 text-4xl font-semibold mb-3'>Add a new item</h3>
                <form onSubmit={handleAddItem}>
                    <input type="text" name="name" id="name" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Name' required autoComplete='off' />

                    <input type="text" name="description" id="description" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Description' required autoComplete='off' />

                    <input type="number" name="price" id="price" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Price' required autoComplete='off' />

                    <input type="number" name="quantity" id="quantity" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Quantity' required autoComplete='off' />

                    <input type="text" name="unit_name" id="unit_name" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Unit Name' required autoComplete='off' />

                    <input type="text" name="category" id="category" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Category' required autoComplete='off' />

                    <input type="text" name="supplier" id="supplier" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Supplier' required autoComplete='off' />

                    <input type="url" name="img" id="img" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Image URL' required autoComplete='off' />

                    <button className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-lg font-semibold my-2' type='submit'>Add The Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;