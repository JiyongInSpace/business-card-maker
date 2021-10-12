import React from 'react';
import styled from 'styled-components';
import defaultLogo from '../assets/default_logo.png';

const Card = ({card}) => {
    const DEFAULT_IMAGE = defaultLogo;
    const { name, company, theme, title, email, message, fileName, fileURL } = card;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <CardContainer className={theme}>
            <Img src={url} />
            <Info>
                <Name>{name}</Name>
                <Company>{company}</Company>
                <p>{title}</p>
                <p>{email}</p>
                <p>{message}</p>
            </Info>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.li`
    min-width: 350px;
    border: 1px solid;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    padding: 20px;
    &.dark{
        background-color: black;
        color: white;
    }
    &.light{
        background-color: white;
        color: black;
    }
    &.navy{
        background-color: navy;
        color: lightblue;
    }
`;
const Img = styled.img`
    width: 150px; height: 150px;
    margin-right: 20px;
`;
const Info = styled.div`
    width: 100%;
`;
const Name = styled.h2``;
const Company = styled.p`
    width: 100%;
    padding: 5px 0 10px 0;
    border-bottom: 1px solid;
`;

