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
        <h2>Which do you relate to more?</h2>
        <AnswerDiv>
            <p>{question.value1}</p>
            <p>{question.value2}</p>
        </AnswerDiv>
        
        {/* <NumberDiv>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </NumberDiv> */}
        <NumberDiv>
            <Form setSlider={setSlider} slider={slider}/>
        </NumberDiv>
        

    </div>
}

export default Question