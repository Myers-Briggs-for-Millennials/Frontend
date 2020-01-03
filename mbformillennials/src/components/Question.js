import React from 'react';
import Form from './Form';
import styled from 'styled-components';

const NumberDiv = styled.div`
    margin: 0 auto;
    display: flex;
    width: 47%;
    justify-content: space-around;

    @media (max-width: 1000px) {
        width: 57%;
    }

    @media (max-width: 800px) {
        width: 77%;
    }
`;

const AnswerDiv = styled.div`
    margin: 0 auto;
    display: flex;
    width: 42%;
    justify-content: space-between;

    @media (max-width: 1000px) {
        width: 52%;
    }

    @media (max-width: 800px) {
        width: 72%;
    }
`;



const Question = (props) => {

    const {setSlider, slider, question, setValues, values, currentSlider, setCurrentSlider} = props
    return <div>
        <h2>Q{question.id + 1}</h2>
        <AnswerDiv>
            <p>{question.value1}</p>
            <p>{question.value2}</p>
            {/* <p>Current value is {currentSlider}</p> */}
        </AnswerDiv>
        <NumberDiv>
            <Form setSlider={setSlider} slider={slider} setCurrentSlider={setCurrentSlider} currentSlider={currentSlider} setValues={setValues} id={question.id} values={values}/>
        </NumberDiv>
    </div>
}

export default Question