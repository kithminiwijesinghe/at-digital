import React from 'react';
import logo from '../../images/logo.png';


const TECHNOLOGIES = ["ReactJS", "Gatsby", "NextJS", "NodeJS"]
const SERVICES = ["Social media Marketing", "Web & Mobile App Development", "Data & Analytics"]

const Footer = () => {


    const getList = (items: string[], hedding: string) => {

        return (
            <div className='w-56 flex flex-col items-start pr-10 pt-5'>
                <h2 className='text-base font-semibold pb-2'>
                    {hedding}
                </h2>
                <div className='text-xs	'>
                    {items.map((tech, index) => {
                        return (
                            <div className='pb-2 flex flex-col items-start text-left	' key={index}>
                                {tech}
                            </div>
                        )
                    })}
                </div>
            </div>
        )

    }

    const getLogoComponent = () => {
        return (

            <div className='w-96 flex flex-col items-start'>
                <div className='w-60 py-5'>
                    <img src={logo} alt="" />
                </div>

                <p className='text-left text-sm'>
                    Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                </p>
            </div>
        )
    }

    return (
        <div className='w-full px-6 py-5 bg-custom-purple text-white flex items-center flex-col justify-center '>
            <div className='w-full flex flex-col md:flex-row justify-between	'>

                {getLogoComponent()}


                {/* tech & services */}
                <div className="flex flex-col md:flex-row py-5">
                    {getList(TECHNOLOGIES, "Our Technologies")}
                    {getList(SERVICES, "Our Services")}
                </div>

            </div>

            <div className='max-w-lg w-full'>
                <hr />
                <div className='pt-2 text-sm flex justify-center'>
                    <button className='px-5'>
                        Privacy Policy
                    </button>
                    |
                    <button className='px-5'>
                        Terms & Conditions
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Footer;