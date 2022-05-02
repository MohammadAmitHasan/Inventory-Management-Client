import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProduct = ({ product }) => {
    const { _id, name, img, price, quantity, unit_name, supplier, category } = product;
    const navigate = useNavigate();
    const loadData = () => {
        navigate(`/inventory/${_id}`);
    }

    return (
        <tr onClick={loadData} className='cursor-pointer hover:bg-blue-200' title='Click to Manage'>

            <td class=" text-emerald-600 font-medium"><img src={img}
                className="w-20" alt="Product" /></td>

            <td class=" px-4 py-2 text-emerald-600 font-medium">{name}</td>

            <td class=" px-4 py-2 text-emerald-600 font-medium">{quantity} {unit_name}</td>

            <td class=" px-4 py-2 text-emerald-600 font-medium">{price} Tk</td>
            <td class=" px-4 py-2 text-emerald-600 font-medium">{category}</td>
            <td class=" px-4 py-2 text-emerald-600 font-medium">{supplier}</td>
            <td class=" px-4 py-2 text-red-500 font-medium">
                <button>
                    <TrashIcon className='w-10 h-10 p-2 rounded-full hover:bg-red-500 hover:text-white'></TrashIcon>
                </button>
            </td>
        </tr>

    );
};

export default ManageProduct;