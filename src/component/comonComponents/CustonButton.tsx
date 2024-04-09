import React from 'react';

interface Props {

    text: string
    className?: string

}

const CustomButton: React.FC<Props> = ({ text, className }) => {
    return (
        <button className={`${className} p-2 bg-custom-orange text-white rounded font-bold text-sm`}>

            {text}

        </button>
    );
};


export default CustomButton;