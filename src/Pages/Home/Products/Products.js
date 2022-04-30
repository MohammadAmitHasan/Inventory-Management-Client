import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from './Product/Product';

const Products = () => {
    const { products } = useProducts(6);
    return (
        <div className='my-10 container mx-auto'>
            <h2 className='text-red-400 text-center text-3xl md:text-4xl font-semibold'>Inventory Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;