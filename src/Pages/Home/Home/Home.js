import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Last10Sold from '../Last10Sold/Last10Sold';
import Last10UpdateStocks from '../Last10UpdateStocks/Last10UpdateStocks';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Last10Sold></Last10Sold>
            <Last10UpdateStocks></Last10UpdateStocks>
            <Features></Features>
        </div>
    );
};

export default Home;