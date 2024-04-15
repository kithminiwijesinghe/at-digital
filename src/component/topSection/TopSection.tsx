import React from 'react';
import CustomButton from '../comonComponents/CustonButton';
import backgroung from "../../images/background.jpg";

const TopSection = () => {


    const floatingComponent = () => {
        return (
            <div className='w-full md:max-w-2xl h-screen max-h-72 flex flex-col justify-center items-start px-5 py-5 md:left-0 md:bottom-0 md:z-10  md:absolute md:my-6  md:mx-6 bg-gradient-to-r from-custom-green to-custom-blue' >
                <div className='font-bold text-4xl text-white text-left '>
                    We crush your competitors, goals, And sales records - without the B.S.
                </div>

                {/* <button className='bg-custom-orange text-sm	text-white '> Get free consultation</button> */}
                <CustomButton className='my-5' text={"Get free consultation"} />
            </div>
        )
    }

    return (
        <div className='w-full relative'>

            <div>
                <img style={{ height: "70vh" }} className='w-full object-cover' src={backgroung} alt='background' />
            </div>

            {floatingComponent()}

        </div>
    );
};

export default TopSection;