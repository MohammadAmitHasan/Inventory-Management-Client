import React from 'react';
import useProducts from '../../../hooks/useProducts';

const Products = () => {
    const { products } = useProducts(6);
    console.log(products);
    return (
        <div>

        </div>
    );
};

export default Products;