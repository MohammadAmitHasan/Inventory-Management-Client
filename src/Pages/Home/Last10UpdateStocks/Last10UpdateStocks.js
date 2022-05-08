import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useUpdateStock from '../../../hooks/useUpdateStock';
import LastUpdateStock from '../../Shared/LastUpdateStock/LastUpdateStock';
import LastUpdateStockSm from '../../Shared/LastUpdateStockSm/LastUpdateStockSm';

const Last10UpdateStocks = () => {
    const updateStocks = useUpdateStock(10);
    return (
        <div className='mt-14'>
            <div className='container mx-auto'>
                <h2 className='text-red-400 text-center text-4xl font-semibold'>Last 10 Imported Products</h2>

                <div className="rounded-t-xl text-left mt-5 hidden sm:block" >
                    <table className="table-auto mx-auto text-center shadow-lg shadow-purple-500">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-purple-200 text-lg">Photo</th>
                                <th className="px-4 py-2 text-purple-200 text-lg">Name</th>
                                <th className="px-4 py-2 text-purple-200 text-lg">Quantity</th>
                                <th className="px-4 py-2 text-purple-200 text-lg">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                updateStocks.map(updateStock => <LastUpdateStockSm
                                    key={updateStock._id}
                                    updateStock={updateStock}
                                ></LastUpdateStockSm>)
                            }
                        </tbody>
                    </table>
                </div >

                {/* display for very small devices */}
                <div>
                    <div className='sm:hidden grid grid-cols-1 gap-5 p-4'>
                        {
                            updateStocks.map(updateStock => <LastUpdateStock
                                key={updateStock._id}
                                updateStock={updateStock}
                            ></LastUpdateStock>)
                        }
                    </div>
                </div>

            </div>
            <Link className='mt-5 text-lg px-5 py-2 w-60 mx-auto rounded-full flex font-semibold justify-center items-center bg-red-600 hover:bg-red-700' to={'/allStockUpdate'}>Display All
                <ArrowNarrowRightIcon className='w-5 h-5 ml-2 mt-1'></ArrowNarrowRightIcon>
            </Link>
        </div>

    );
};

export default Last10UpdateStocks;