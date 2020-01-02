import React from 'react'
import Form from './Form'
import styled from 'styled-components'

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
    const {setSlider, slider} = props
    return <div>
        <h2>Rate yourself on a scale from 1 to 5</h2>
        <AnswerDiv>
            <p>Makes Lists</p>
            <p>Relies on Memory</p>
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
        <button onClick={e => {
            e.preventDefault();
            props.handleSubmit(props.values);
        }}>Get Result</button>
    </div>
}

export default Question