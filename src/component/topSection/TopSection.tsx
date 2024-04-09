import React from 'react';
import CustomButton from '../comonComponents/CustonButton';

const TopSection = () => {


    const floatingComponent = () => {
        return (
            <div className='w-full md:max-w-2xl h-screen max-h-72 flex flex-col justify-center items-start px-5 py-5 md:left-0 md:bottom-0 md:z-10  md:absolute md:my-6  md:mx-6 bg-gradient-to-r from-custom-green to-custom-blue' >
                <div className='font-bold text-4xl md:text-5xl text-white text-left '>
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
                <img style={{ height: "70vh" }} className='w-full object-cover' src='https://s3-alpha-sig.figma.com/img/7d26/92c3/02df419cba923b35861b32302ece4d90?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MUmgb5L4jAXQBEtHgpcsalDpeoAYcZt3mpmF607DkqHwzMDlDQWnHNKrbZyuHkJ1xK7i5ehYTsUqVJ7CHyqf7rlKdnU6SvKX5CiiBJ8yD1MZxeiATIWldXZqu6yGTcflX0ZK9lZGV0nCy6r5OayBcGyov4EUQQhPCJm-LJ0OviBR4xDXAK3dR~3ahhihL9AiCe8JXerJUN~U8Ln0jzQl-N2rzGRUy1sey736-Ubc5LryBBRUaIt3eRTUJXIFFa32Ni2uGLJ7A-FSo5WjFYDTzrhOLRexkoZQPpSosfSkrm16DYH4dUoK1PtOC~oIXVMtEY3Aa7WZqAaVyVp0nrpiLQ__' alt='background' />
            </div>

            {floatingComponent()}

        </div>
    );
};

export default TopSection;