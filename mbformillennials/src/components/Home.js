import React from 'react'
import { useHistory } from 'react-router-dom'

import { Btn } from './styled-components';

const Home = () => {
    const history = useHistory();

    return (
        <div>
            <p>You were born with an original Characteristiq, so don't live life a copy.</p>        
            <Btn onClick={() => history.push('/questions')}>Go!</Btn>
        </div>
    );
}

export default Home