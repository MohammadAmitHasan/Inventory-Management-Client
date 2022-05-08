import React from 'react';

const LastSold = ({ soldProduct }) => {
    const { img, name, date, amount, unitName, totalPrice } = soldProduct;
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
                    <p>Quantity : {amount} {unitName}</p>
                    <p>Total Price: {totalPrice} Tk</p>
                    <p>Date: {date}</p>
                </div>
            </div>
        </div>
    );
};

export default LastSold;