import React from 'react';
import useProducts from '../../hooks/useProducts';
import './ManageProducts.css'
import ManageProductMd from './ManageProductMd/ManageProductMd';
import ManageProductSm from './ManageProductSm/ManageProductSm';


const AllProducts = () => {
    const { products } = useProducts();
    return (
        <div className='mb-5 p-1 container mx-auto'>
            <h2 className='text-red-400 text-center text-4xl font-semibold mb-5'>Manage Inventory Items</h2>

            {/* Display for medium or larger devices */}
            <div className="rounded-t-xl text-left hidden md:block" >
                <table className="table-auto mx-auto text-center shadow-lg shadow-purple-500">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-purple-200 text-lg">Photo</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Name</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Stock</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Price</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Category</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Supplier</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Update Stock</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <ManageProductMd key={product._id} product={product}></ManageProductMd>
                            )
                        }
                    </tbody>
                </table>
            </div >

            {/* display for small devices */}
            <div className='md:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 p-4'>
                {
                    products.map(product => <ManageProductSm
                        key={product._id}
                        product={product}
                    ></ManageProductSm>
                    )
                }
            </div>
        </div >
    );
};

export default AllProducts;