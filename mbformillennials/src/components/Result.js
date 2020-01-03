import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Btn } from './styled-components';

import { types } from '../data/types';

const ResultDiv = styled.div`
    margin: 0 auto;
    display: flex;
    width: 47%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula tortor at diam commodo porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sapien sapien, convallis eget justo non, gravida dictum leo. Suspendisse ex sem, gravida nec ante vel, vulputate auctor nisl. Donec suscipit enim vel diam rutrum, vitae sodales ex finibus. Duis suscipit placerat justo, vitae pellentesque eros pellentesque ut. Maecenas scelerisque consequat magna eget rutrum. Nam feugiat luctus tincidunt. Vestibulum convallis lorem in dolor congue vestibulum. Etiam laoreet aliquam dignissim. Sed non arcu purus. Duis gravida sem risus, et mollis eros hendrerit eget.</p>
                </>
            ) : <p>Oops! Something went wrong!</p>}            
            <Btn onClick={() => history.push('/')}>Start Over</Btn>
        </ResultDiv>
    );
};

export default Result;