import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Inventory</h1>
            <h2>{id}</h2>
        </div>
    );
};

export default Inventory;