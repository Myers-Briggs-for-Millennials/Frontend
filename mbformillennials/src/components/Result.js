import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

import { Btn } from './styled-components';

import { types } from '../data/types';

const ResultDiv = styled.div`
    margin: 30px auto 0;
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

const Image = styled.img`
    max-width: 600px;
`;

const Result = props => {
    const history = useHistory();

    const [currentImage, setCurrentImage] = useState(null);    

    const currentResult = types.find(item => item.type === props.result);
    console.log(currentResult)

    useEffect(() => {
        if (currentResult) {
            const randomImage = currentResult.images[Math.floor(Math.random()*(currentResult.images.length - 1))];
            setCurrentImage(randomImage);
        };
    }, [currentResult]);

    return (
        <ResultDiv>
            {props.result ? (
                <div style={{ marginBottom: '30px' }}>
                    {currentImage ? <Image src={currentImage} alt={currentResult.type} /> : <CircularProgress />}
                    <h2>
                        The {currentResult.name}{' '}
                        ({currentResult.type})                
                    </h2>
                    <p>{currentResult.description}</p>
                </div>
            ) : <p>Oops! Something went wrong!</p>}            
            <Btn onClick={() => history.push('/')}>Start Over</Btn>
        </ResultDiv>
    );
};

export default Result;