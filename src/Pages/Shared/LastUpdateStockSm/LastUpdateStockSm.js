import React from 'react';

const LastUpdateStockSm = ({ updateStock }) => {
    const { img, name, date, amount, unitName } = updateStock;
    return (
        <tr className='hover:bg-zinc-900'>
            <td><img src={img}
                className="w-20" alt="Product" /></td>
            <td className=" px-4 py-2 font-medium">{name}</td>
            <td className=" px-4 py-2 font-medium">{amount} {unitName}</td>
            <td className=" px-4 py-2 font-medium">{date}</td>
        </tr>
    );
};

export default LastUpdateStockSm;