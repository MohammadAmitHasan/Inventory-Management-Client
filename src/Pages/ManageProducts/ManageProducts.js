import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageProduct from './ManageProduct/ManageProduct';
import './ManageProducts.css'

const AllProducts = () => {
    const { products } = useProducts();

    return (
        <div className='mb-5 p-5 container mx-auto'>
            <h2 className='text-red-400 text-center text-4xl font-semibold mb-5'>Manage Inventory Items</h2>

            <div class="rounded-t-xl text-left bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
                <table class="table-auto mx-auto text-center">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-emerald-600">Photo</th>
                            <th class="px-4 py-2 text-emerald-600">Name</th>
                            <th class="px-4 py-2 text-emerald-600">Stock</th>
                            <th class="px-4 py-2 text-emerald-600">Price</th>
                            <th class="px-4 py-2 text-emerald-600">Category</th>
                            <th class="px-4 py-2 text-emerald-600">Supplier</th>
                            <th class="px-4 py-2 text-emerald-600">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
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