import React from 'react';
import Banner from '../Banner/Banner';
import Last10Sold from '../Last10Sold/Last10Sold';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Last10Sold></Last10Sold>
        </div>
    );
};

export default Home;