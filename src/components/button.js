import React from 'react';
import styled from 'styled-components';

const Button = ({name, onClick}) => (
        <Btn onClick={onClick}>
            {name}
        </Btn>
    );

export default Button;

const Btn = styled.button`
    background-color: blueviolet;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding: 0.5em;
    flex: 1 1 50%;
    font-size: 0.8em;
    border: 0;
    &:hover{opacity: 0.8;}
`;
