import { TrashIcon, UploadIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProduct = ({ product }) => {
    const { _id, name, img, price, quantity, unit_name, supplier, category } = product;
    const navigate = useNavigate();

    const loadData = () => {
        navigate(`/inventory/${_id}`);
    }

    const handleDeleteItem = () => {
        const confirm = window.confirm('Are You Sure to delete.?');
        if (confirm) {
            axios.delete(`http://localhost:5000/deleteItem/${_id}`)
                .then(result => {
                    if (result.data.deletedCount > 0) {
                        toast('Item deleted successfully')
                    }
                })
        }
    }

    return (
        <tr className='cursor-pointer hover:bg-blue-200' title='Click to Manage'>

            <td class=" text-emerald-600 font-medium"><img src={img}
                className="w-20" alt="Product" /></td>

            <td class=" px-4 py-2 text-emerald-600 font-medium">{name}</td>

            <td class=" px-4 py-2 text-emerald-600 font-medium">{quantity} {unit_name}</td>

            <td class=" px-4 py-2 text-emerald-600 font-medium">{price} Tk</td>
            <td class=" px-4 py-2 text-emerald-600 font-medium">{category}</td>
            <td class=" px-4 py-2 text-emerald-600 font-medium">{supplier}</td>

            <td class=" px-4 py-2 text-slate-800 font-medium">
                <button onClick={loadData}>
                    <UploadIcon className='w-10 h-10 p-2 rounded-full hover:bg-slate-800 hover:text-white'></UploadIcon>
                </button>
            </td>

            <td class=" px-4 py-2 text-red-500 font-medium">
                <button onClick={handleDeleteItem}>
                    <TrashIcon className='w-10 h-10 p-2 rounded-full hover:bg-red-500 hover:text-white'></TrashIcon>
                </button>
            </td>
        </tr>

    );
};

export default ManageProduct;