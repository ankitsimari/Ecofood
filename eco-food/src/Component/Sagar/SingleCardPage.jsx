import React from 'react';
import Header from "./Header"
import SimilarProduct from './SimilarProduct';
import BenefitVideo from "./BenefitsVideo"
import OtherProduct from "./OtherProducts"
const SingleCardPage = () => {


    return (
        <div>
            <Header/>
            <BenefitVideo/>
            <SimilarProduct/>
            <OtherProduct/>
        </div>
    );
};

export default SingleCardPage;