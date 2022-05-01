import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageProduct from './ManageProduct/ManageProduct';

const AllProducts = () => {
    const { products } = useProducts();

    return (
        <div className='my-5 p-5 container mx-auto'>
            <h2 className='text-red-400 text-center text-4xl font-semibold'>Manage Inventory Items</h2>
            <div className='mt-7'>
                <table className='text-left w-full border-collapse'>
                    <tbody>
                        <tr className='bg-gray-600 w-full text-lg p-3'>
                            <th>Photo</th>
                            <th>Name</th>

                            <th>Stock</th>
                            <th>Price</th>
                            <th>Supplier</th>
                            <th>Delete</th>

                        </tr>
                        {
                            products.map(product => <ManageProduct
                                key={product._id}
                                product={product}
                            ></ManageProduct>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default AllProducts;