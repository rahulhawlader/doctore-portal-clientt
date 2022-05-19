import React from 'react';
import chire from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Benner = () => {
    return (
        <div className="hero min-h-screen">
            < div className="hero-content flex-col lg:flex-row-reverse" >
                <img src={chire} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your new Smile Start Here !</h1>
                    <p className="py-6" > Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.</p >
                    <PrimaryButton>Get Start</PrimaryButton>
                </div >
            </div >
        </div >
    );
};

export default Benner;