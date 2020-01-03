import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Btn } from './styled-components';

import { types } from '../data/types';

const ResultDiv = styled.div`
    margin: 0 auto;
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 1000px) {
        width: 60%;
    };

    @media (max-width: 800px) {
        width: 80%;
    }
`;

const Result = props => {
    const history = useHistory();

    const currentResult = types.find(item => item.type === props.result);
    console.log(currentResult)

    return (
        <ResultDiv>
            {props.result ? (
                <>
                    <img src='https://picsum.photos/500/300' alt='result' />
                    <h2>
                        The {currentResult.name}{' '}
                        ({currentResult.type})                
                    </h2>
                    <p>{currentResult.description}</p>
                </>
            ) : <p>Oops! Something went wrong!</p>}            
            <Btn onClick={() => history.push('/')}>Start Over</Btn>
        </ResultDiv>
    );
};

export default Result;