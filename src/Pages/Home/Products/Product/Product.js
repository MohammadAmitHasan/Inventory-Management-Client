import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, description, img, price, quantity, unit_name, supplier } = product;

    return (
        <div className='p-2 rounded-lg shadow-md shadow-purple-300'>
            <img src={img} alt="product" className='rounded-lg' />
            <div className='p-2'>
                <h3 className='text-2xl my-2 font-semibold text-red-400'>{name}</h3>
                <p>{description}</p>
                <p>Supplier: {supplier}</p>
                <h5 className='text-lg my-2'>Price: <span className='text-orange-400 font-semibold'>Tk {price}</span></h5>
                <h5 className='text-lg'>In Stock: <span className='text-orange-400 font-semibold'>{quantity} {unit_name}</span></h5>

                <Link to={`/inventory/${_id}`}><button className='mt-5 mb-1 w-full rounded-full py-2 font-semibold mx-auto text-lg bg-purple-700 hover:bg-purple-600 block'>Stock Update</button></Link>
            </div>
        </div>
    );
};

export default Product;