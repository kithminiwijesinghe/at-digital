import React from 'react';


interface Props {
    buttonName: string
}

const HedderButton: React.FC<Props> = ({ buttonName }) => {
    return (
        <button className=' p-5 text-xs	'>
            {buttonName}
        </button>
    );
};

export default HedderButton;