import React from 'react';
import { TrashIcon, UploadIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';


const ManageProductMd = ({ product, handleDeleteItem }) => {
    const { _id, name, img, price, quantity, unit_name, supplier, category } = product;

    const navigate = useNavigate();

    const loadData = (id) => {
        navigate(`/inventory/${id}`);
    }

    return (
        <tr className='hover:bg-zinc-900'>
            <td><img src={img}
                className="w-20" alt="Product" /></td>

            <td className=" px-4 py-2 font-medium">{name}</td>

            <td className=" px-4 py-2 font-medium">{quantity} {unit_name}</td>

            <td className=" px-4 py-2 font-medium">{price} Tk</td>
            <td className=" px-4 py-2 font-medium">{category}</td>
            <td className=" px-4 py-2 font-medium">{supplier}</td>

            <td className=" px-4 py-2 font-medium">
                <button onClick={() => loadData(_id)}>
                    <UploadIcon className='w-10 h-10 p-2 rounded-full hover:bg-purple-800 hover:text-white'></UploadIcon>
                </button>
            </td>

            <td className=" px-4 py-2 text-red-600 font-medium">
                <button onClick={() => handleDeleteItem(_id)}>
                    <TrashIcon className='w-10 h-10 p-2 rounded-full hover:bg-red-600 hover:text-white'></TrashIcon>
                </button>
            </td>
        </tr>
    );
};

export default ManageProductMd;