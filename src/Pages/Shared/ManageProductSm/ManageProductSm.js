import { TrashIcon, UploadIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProductSm = ({ product }) => {
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
        <div className='shadow-md shadow-purple-500  p-3 rounded-lg'>

            <div className='flex'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-20 mr-3 rounded-lg' src={img} alt="product" />
                    </div>
                </div>
                <div>
                    <h4 className='text-2xl text-purple-300 mb-2'>{name}</h4>
                    <p>Stock : {quantity} {unit_name}</p>
                    <p>Price: {price} Tk</p>
                    <p>Supplier: {supplier}</p>
                    <p>Category: {category}</p>
                </div>
            </div>

            <div className='mt-3 flex justify-center'>
                <button className='flex items-center bg-purple-600 rounded-full px-3 mr-2' onClick={() => loadData(_id)}>
                    Update Stock
                    <UploadIcon className='w-6 h-6 ml-1 rounded-full hover:bg-slate-800 hover:text-white'></UploadIcon>
                </button>

                <button onClick={() => handleDeleteItem(_id)}>
                    <TrashIcon className='ml-2 w-8 h-8 p-1 rounded-full bg-red-500'></TrashIcon>
                </button>
            </div>
        </div>


    );
};

export default ManageProductSm;