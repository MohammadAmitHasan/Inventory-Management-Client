import React from 'react';

const ManageProduct = ({ product }) => {
    const { _id, name, img, price, quantity, unit_name, supplier } = product;
    return (

        <tr className='cursor-pointer hover:bg-slate-900'>
            <td><img src={img} className="w-16" alt="" /></td>

            <td>{name}</td>

            <td>{quantity} {unit_name}</td>

            <td>{price}</td>
            <td>{supplier}</td>
            <td>
                <button>
                    Delete
                </button>
            </td>
        </tr>

    );
};

export default ManageProduct;