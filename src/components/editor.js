import React from 'react';
import styled from 'styled-components';
import CardAddForm from './card_add_form';
import CardEditForm from './card_edit_form';

const Editor = ({FileInput, cards, addCard, updateCard, deleteCard}) => {


    return <Container>
        <TabTitle>Card Maker</TabTitle>
        {Object.keys(cards).map(key => {
            return <CardEditForm 
                        key={`editor${key}`}
                        FileInput={FileInput}
                        card={cards[key]} 
                        updateCard={updateCard}
                        deleteCard={deleteCard}/>;
        })}
        <CardAddForm FileInput={FileInput} onSubmit={addCard}/>
    </Container>;
};

export default Editor;

const Container = styled.div`
    width: 50%; height: 100%;
    padding: 20px;
    border-right: 1px solid lightsteelblue;
    overflow-y: auto;
    &::-webkit-scrollbar{width:5px;}
    &::-webkit-scrollbar-thumb{background-color: blueviolet;}
    &::-webkit-scrollbar-track{background-color: lightsteelblue;}
    @media ${props => props.theme.tablet}{
        width: 100%;
        height: 50%;
        border-right: none;
        border-bottom: 1px solid lightsteelblue;
    }
`;
const TabTitle = styled.h4`
    text-align: center;
    padding: 20px;
    color: navy;
    font-size: 1.5em;
`;