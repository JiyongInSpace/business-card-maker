import React from 'react';
import styled from 'styled-components';


const Header = ({onLogout}) => (
    <Headers>
        {onLogout && <Button onClick={onLogout}>Logout</Button>}
        <i class="fas fa-address-card"></i><h1>Card Maker</h1>
    </Headers>
);

const Headers = styled.header`
    text-align: center;
    padding: 10px;
    background-color: blueviolet;
    color: white;
    position: relative;
    i{
        font-size: 40px;
    }
`;
const Button = styled.button`
    position: absolute;
    top: 10px; right: 10px;
    background: inherit;
    font-size: 0.5em;
    border: 0;
    cursor: pointer;
`;


export default Header;

