import React from 'react';
import useProducts from '../../hooks/useProducts';
import './ManageProducts.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import ManageProductMd from '../Shared/ManageProductMd/ManageProductMd';
import ManageProductSm from '../Shared/ManageProductSm/ManageProductSm';
import { Link } from 'react-router-dom';
import { ArrowNarrowRightIcon, PlusCircleIcon } from '@heroicons/react/solid';

const AllProducts = () => {
    const { products, setProducts } = useProducts();

    const handleDeleteItem = (id) => {
        const confirm = window.confirm('Are You Sure to delete.?');
        if (confirm) {
            axios.delete(`https://nim-server.herokuapp.com/deleteItem/${id}`)
                .then(result => {
                    if (result.data.deletedCount > 0) {
                        const filtered = products.filter(product => product._id !== id);
                        setProducts(filtered);
                        toast('Item deleted successfully')
                    }
                })
        }
    }

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
                                <ManageProductMd
                                    key={product._id}
                                    product={product}
                                    handleDeleteItem={handleDeleteItem}
                                ></ManageProductMd>
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
                        handleDeleteItem={handleDeleteItem}
                    ></ManageProductSm>
                    )
                }
            </div>
            <Link className='mt-10 text-lg px-5 py-2 w-60 mx-auto rounded-full flex font-semibold justify-center items-center bg-red-600 hover:bg-red-700' to={'/addItem'}>Add New Item
                <PlusCircleIcon className='w-5 h-5 ml-2 mt-1'></PlusCircleIcon>
            </Link>
        </div >
    );
};

export default AllProducts;