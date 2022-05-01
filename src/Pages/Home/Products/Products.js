import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from './Product/Product';

const Products = () => {
    const { products } = useProducts(6);
    return (
        <div className='mt-32 md:mt-10 mb-10 container mx-auto p-5'>
            <h2 className='text-red-400 text-center text-4xl font-semibold'>Inventory Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mb-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>
            <Link className='text-lg px-5 py-2 w-60 mx-auto rounded-full flex font-semibold justify-center items-center bg-red-600 hover:bg-red-700' to={'manageProducts'}>Manage Inventories
                <ArrowNarrowRightIcon className='w-5 h-5 ml-2 mt-1'></ArrowNarrowRightIcon>
            </Link>
        </div>
    );
};

export default Products;