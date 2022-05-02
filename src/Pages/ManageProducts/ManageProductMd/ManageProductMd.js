import React from 'react';
import { TrashIcon, UploadIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProductMd = ({ product }) => {
    const { _id, name, img, price, quantity, unit_name, supplier, category } = product;

    const navigate = useNavigate();

    const loadData = (id) => {
        navigate(`/inventory/${id}`);
    }

    const handleDeleteItem = (id) => {
        const confirm = window.confirm('Are You Sure to delete.?');
        if (confirm) {
            axios.delete(`http://localhost:5000/deleteItem/${id}`)
                .then(result => {
                    if (result.data.deletedCount > 0) {
                        toast('Item deleted successfully')
                    }
                })
        }
    }
    return (
        <tr className='hover:bg-zinc-900'>
            <td className=" font-medium"><img src={img}
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