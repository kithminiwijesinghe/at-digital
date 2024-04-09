import React from 'react';
import CustomButton from '../comonComponents/CustonButton';

interface Props {
    title: string;
    text: string;
    buttonName: string
    isImageRight: boolean
    image: string

}

const Widget: React.FC<Props> = ({ title, text, buttonName, isImageRight, image }) => {


    const getContend = () => {
        return (
            <div className='flex flex-col items-start text-left justify-center'>
                <h2 className='text-2xl	font-semibold text-custom-purple'>{title}</h2>
                <p className='my-4'>
                    {text}
                </p>
                <CustomButton text={buttonName} />

            </div>
        )
    }

    const imageComponent = (<div className='w-full min-w-72'>
        <img src={image} alt="widget1" />
    </div>)

    return (
        <div className={`${isImageRight ? "flex-row-reverse md:flex-row-reverse" : "md:flex-row"} max-w-4xl flex flex-col my-10`}>

            {imageComponent}
            {getContend()}





        </div>
    );
};

export default Widget;
export type { Props as WidgetProps };