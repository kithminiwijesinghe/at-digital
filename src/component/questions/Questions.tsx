import React from 'react';
import QuestionComponent, { QuestionData } from './QuestionComponent';


const QUESTIONS: QuestionData[] = [
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
    }
]

const Questions = () => {
    return (
        <div className='max-w-4xl w-full'>

            <h1 className='text-custom-purple font-semibold text-2xl my-5'>Frequently asked questions</h1>

            <div>
                {QUESTIONS.map((question, index) => {
                    return <QuestionComponent key={index} question={question.question} answer={question.answer} />
                })}
            </div>
        </div>
    );
};

export default Questions
    ;