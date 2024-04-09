import React, { useState } from 'react';

type QuestionData = {
    question: string;
    answer: string;
}

const QuestionComponent: React.FC<QuestionData> = ({ question, answer }) => {

    const [isOn, setIsOn] = useState<boolean>(false);

    const answerComponent = isOn ? <div className='text-sm text-left py-5'>{answer}</div> : null;

    return (
        <div className='w-full bg-custom-light-purple mb-5 px-5'>

            <div className={`${isOn ? "text-custom-purple" : "text-black"} flex justify-between py-5 font-medium`}>
                <div>{question}</div>
                <button onClick={() => setIsOn(s => !s)}>
                    {isOn ? '-' : '+'}

                </button>
            </div>
            {answerComponent}

        </div>
    );
};

export default QuestionComponent;
export type { QuestionData }