import React from 'react'
import { useHistory } from 'react-router-dom'

import { Btn } from './styled-components';

const Home = () => {
    const history = useHistory();

    return (
        <div>
            <p>Get your MBTI profile... meme-ifed.</p>        
            <Btn onClick={() => history.push('/questions')}>Go!</Btn>
        </div>
    );
}

export default Home