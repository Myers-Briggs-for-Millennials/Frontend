import React from 'react'
import Form from './Form'
import styled from 'styled-components'
import { questions } from './data';

const NumberDiv = styled.div`
    margin: 0 auto;
    display: flex;
    width: 47%;
    justify-content: space-around;
`;

const AnswerDiv = styled.div`
    margin: 0 auto;
    display: flex;
    width: 42%;
    justify-content: space-between;
`;



const Question = (props) => {
    const {setSlider, slider, question} = props
    return <div>
        <h2>Q{question.id}</h2>
        <AnswerDiv>
            <p>{question.value1}</p>
            <p>{question.value2}</p>
        </AnswerDiv>
        <NumberDiv>
            <Form setSlider={setSlider} slider={slider}/>
        </NumberDiv>
        

    </div>
}

export default Question