import React from 'react';
import styled from 'styled-components';
import Card from './card';

const Preview = ({cards}) => {


    return <Container>
        <TabTitle>Card Preview</TabTitle>
        <Cards>
            {Object.keys(cards).map(key => {
                return <Card key={`card${key}`} card={cards[key]} />;
            })}
        </Cards>
    </Container>;
};

export default Preview;

const Container = styled.div`
    width: 50%; height: 100%;
    padding: 20px;
    overflow-y: auto;
    background-color: white;
    &::-webkit-scrollbar{width:5px;}
    &::-webkit-scrollbar-thumb{background-color: blueviolet;}
    &::-webkit-scrollbar-track{background-color: lightsteelblue;}
    @media ${props => props.theme.tablet}{
        width: 100%;
        height: 50%;
    }
`;
const TabTitle = styled.h4`
    text-align: center;
    padding: 20px;
    color: navy;
    font-size: 1.5em;
`;
const Cards = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;