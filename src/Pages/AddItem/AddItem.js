import React from 'react';

const AddItem = () => {
    return (
        <div className='container mx-auto mb-5 p-5'>

            <div className='text-center max-w-md mx-auto shadow-lg shadow-purple-500 p-5 rounded-lg'>
                <h3 className='text-red-400 text-4xl font-semibold mb-3'>Add a new item</h3>
                <form>
                    <input type="text" name="name" id="name" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Name' required autoComplete='off' />

                    <input type="text" name="description" id="description" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Description' required autoComplete='off' />

                    <input type="number" name="price" id="price" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Price' required autoComplete='off' />

                    <input type="number" name="quantity" id="quantity" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Quantity' required autoComplete='off' />

                    <input type="text" name="unit_name" id="unit_name" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Unit Name' required autoComplete='off' />

                    <input type="text" name="category" id="category" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Category' required autoComplete='off' />

                    <input type="text" name="supplier" id="supplier" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Supplier' required autoComplete='off' />

                    <input type="url" name="img" id="img" className='bg-purple-100 text-lg w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Item Image URL' required autoComplete='off' />

                    <button className='bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-full text-lg font-semibold my-2' type='submit'>Add The Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;