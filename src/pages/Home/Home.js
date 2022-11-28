import React from 'react';
import './home.scss'
import Bigcloud from '../../components/Bigcloud/Bigcloud';
import Littlecloud from '../../components/Littlecloud/Littlecloud';

const Home = () => {
    return (
        <>
            <div id="background">
                <div className="background-rows">
                    <Bigcloud></Bigcloud>
                    <Littlecloud></Littlecloud>
                    <Bigcloud></Bigcloud>
                </div>
                <div className="background-rows">
                    <Littlecloud></Littlecloud>
                    <Bigcloud></Bigcloud>
                    <Littlecloud></Littlecloud>
                </div>
                <div className="background-rows">
                    <Bigcloud></Bigcloud>
                    <Littlecloud></Littlecloud>
                    <Bigcloud></Bigcloud>
                </div>
                <div className="background-rows">
                    <Littlecloud></Littlecloud>
                    <Bigcloud></Bigcloud>
                    <Littlecloud></Littlecloud>
                </div>
            </div>
            <div id='content'>
                
            </div>
            </>

    )
}

export default Home
