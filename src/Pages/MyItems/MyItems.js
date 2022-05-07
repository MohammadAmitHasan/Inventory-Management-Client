import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'
import ManageProductMd from '../Shared/ManageProductMd/ManageProductMd';
import ManageProductSm from '../Shared/ManageProductSm/ManageProductSm';


const MyItems = () => {
    const [user] = useAuthState(auth);

    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/myItem?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(data => {
                setMyProducts(data.data)
            })
    }, [user.email])

    const handleDeleteItem = (id) => {
        const confirm = window.confirm('Are You Sure to delete.?');
        if (confirm) {
            axios.delete(`http://localhost:5000/deleteItem/${id}`)
                .then(result => {
                    if (result.data.deletedCount > 0) {
                        const filtered = myProducts.filter(product => product._id !== id);
                        setMyProducts(filtered);
                        toast('Item deleted successfully')
                    }
                })
        }
    }

    return (
        <div className='container mx-auto p-1'>
            <h1 className='text-red-400 text-4xl mb-5 text-center font-semibold'>My Items</h1>

            {/* Display for medium or larger devices */}
            <div className="rounded-t-xl text-left hidden md:block" >
                <table className="table-auto mx-auto text-center shadow-lg shadow-purple-500">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-purple-200 text-lg">Photo</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Name</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Stock</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Price</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Category</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Supplier</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Update Stock</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map(product =>
                                <ManageProductMd
                                    key={product._id}
                                    product={product}
                                    handleDeleteItem={handleDeleteItem}
                                ></ManageProductMd>
                            )
                        }
                    </tbody>
                </table>
            </div >

            {/* display for small devices */}
            <div className='md:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 p-4'>
                {
                    myProducts.map(product => <ManageProductSm
                        key={product._id}
                        product={product}
                        handleDeleteItem={handleDeleteItem}
                    ></ManageProductSm>
                    )
                }
            </div>

        </div>
    );
};

export default MyItems;