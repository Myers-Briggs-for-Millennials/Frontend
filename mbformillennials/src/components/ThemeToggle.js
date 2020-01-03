import React from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../hooks/useDarkMode';

const ThemeContainer = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

const ThemeBtn = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContainer>
            <ThemeBtn onClick={toggleDarkMode}>
                {darkMode ? '🌞' : '🌚'}
            </ThemeBtn>
        </ThemeContainer>
    );
};

export default ThemeToggle;