import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

import { Btn } from './styled-components';

const RegisterContainer = styled.div`
    width: 40%;
    margin: 0 auto;
`;

const RegisterForm = styled.form`
    
`;

const Input = styled(OutlinedInput)`
    background: #fff;
    margin-bottom: 20px;
`;

const Register = () => {
    const history = useHistory();

    return (
        <RegisterContainer>
            <RegisterForm>
                <FormControl fullWidth variant='outlined'>
                    <InputLabel htmlFor='username'>Username</InputLabel>
                    <Input
                        type='text'
                        name='username'
                        id='username'
                    />
                </FormControl>
                <FormControl fullWidth variant='outlined'>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input
                        type='password'
                        name='password'
                        id='password'
                    />
                </FormControl>                
                <Btn
                    style={{ background: '#B22222' }}
                    onClick={e => {
                        e.preventDefault();
                        history.push('/result');
                    }}
                >Go Back</Btn>{' '}
                <Btn
                    onClick={e => {
                        e.preventDefault();
                    }}
                >Register</Btn>
            </RegisterForm>
        </RegisterContainer>
    );
};

export default Register;