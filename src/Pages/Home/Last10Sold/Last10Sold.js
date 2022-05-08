import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useSoldProducts from '../../../hooks/useSoldProducts';
import LastSold from '../../Shared/LastSold/LastSold';
import LastSoldSm from '../../Shared/LastSoldSm/LastSoldSm';


const Last10Sold = () => {
    const { soldProducts } = useSoldProducts(10);
    return (
        <div className='container mx-auto'>
            <h2 className='text-red-400 text-center text-4xl font-semibold'>Last 10 Sold Products</h2>

            <div className="rounded-t-xl text-left mt-5 hidden sm:block" >
                <table className="table-auto mx-auto text-center shadow-lg shadow-purple-500">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-purple-200 text-lg">Photo</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Name</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Quantity</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Total Price</th>
                            <th className="px-4 py-2 text-purple-200 text-lg">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            soldProducts.map(soldProduct => <LastSoldSm
                                key={soldProduct._id}
                                soldProduct={soldProduct}
                            ></LastSoldSm>)
                        }
                    </tbody>
                </table>

            </div >

            {/* display for very small devices */}
            <div>
                <div className='sm:hidden grid grid-cols-1 gap-5 p-4'>
                    {
                        soldProducts.map(soldProduct => <LastSold
                            key={soldProduct._id}
                            soldProduct={soldProduct}
                        ></LastSold>)
                    }
                </div>
            </div>
            <Link className='mt-5 text-lg px-5 py-2 w-60 mx-auto rounded-full flex font-semibold justify-center items-center bg-red-600 hover:bg-red-700' to={'/allSold'}>Display All
                <ArrowNarrowRightIcon className='w-5 h-5 ml-2 mt-1'></ArrowNarrowRightIcon>
            </Link>
        </div>
    );
};

export default Last10Sold;