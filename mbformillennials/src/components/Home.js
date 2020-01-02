import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

let TheLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

let Btn = styled.button`
    background-color: #6558f5
    border: none;
    padding: 1%;
    border-radius: 5px;
`;

const Home = () => {
    return (<div>        
        <Btn><TheLink to="/questions">Go!</TheLink></Btn>
    </div>)
}

export default Home