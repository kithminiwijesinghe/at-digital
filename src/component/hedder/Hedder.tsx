import React, { useState } from 'react';
import HedderButton from './HedderButton';
import logo from '../../images/logo.png';
import menueIcon from "../../images/icons/menue.png"
import closeIcon from "../../images/icons/close.png"

const Hedder = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false);


    const getMenueButton = () => {

        return (

            <div className='flex md:hidden '>
                <button onClick={() => setShowMenu(s => !s)} className='focus:outline-none'>
                    <img className="w-8" src={menueIcon} alt="" />
                </button>
            </div >
        )
    }


    return (
        <div className='w-full h-16 bg-custom-purple text-white	flex items-center px-6 justify-between' >

            <div className='w-60'>
                <img src={logo} alt="" />
            </div>
            <div className='hidden md:flex'>
                <HedderButton buttonName='SERVICES' />
                <HedderButton buttonName='ABOUT US' />
                <HedderButton buttonName='CONTACT US' />
                <HedderButton buttonName='CAREERS' />

            </div>

            <div className={`transition ease-in-out delay-150 duration-300 fixed top-0 left-0 z-50 w-full h-full bg-white text-black ${showMenu ? 'block' : 'translate-x-full'}`}>
                <div className='flex flex-col items-start justify-start h-full'>
                    <div className='w-full flex justify-between p-5	'>
                        <h1 className=''>Home</h1>

                        <button onClick={() => setShowMenu(s => !s)} className='focus:outline-none'>
                            <img className="w-5" src={closeIcon} alt="" />
                        </button>


                    </div>
                    <HedderButton buttonName='SERVICES' />
                    <HedderButton buttonName='ABOUT US' />
                    <HedderButton buttonName='CONTACT US' />
                    <HedderButton buttonName='CAREERS' />
                </div>
            </div>

            {getMenueButton()}
            {/* {showMenu ? menueComponent() : null} */}
        </div>
    );
};

export default Hedder;