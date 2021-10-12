import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer'
import { useHistory } from 'react-router';
import Editor from './editor';
import Preview from './preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: 'Jiyong',
            company: 'Samsung',
            theme: 'dark',
            title: 'developer',
            email: 'blaziken@naver.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        },
        '2':{
            id: '2',
            name: 'Jiyong',
            company: 'Samsung2',
            theme: 'light',
            title: 'developer',
            email: 'blaziken@naver.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        },
        '3':{
            id: '3',
            name: 'Jiyong',
            company: 'Samsung3',
            theme: 'navy',
            title: 'developer',
            email: 'blaziken@naver.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        }
    });
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };
    
    const createOrUpdateCard = (card) => {
        const updated = {...cards};
        updated[card.id] = card;
        setCards(updated);
    }
    const deleteCard = (card) => {
        const updated = {...cards};
        delete updated[card.id];
        setCards(updated);
    }
    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user){
                history.push('/');
            }
        })
    })
    return (
    <Container>
        <Header onLogout={onLogout}/>
        <InnerContainer>
            <Editor cards={cards} 
                    addCard={createOrUpdateCard} 
                    updateCard={createOrUpdateCard}
                    deleteCard={deleteCard}/>
            <Preview cards={cards} />
        </InnerContainer>
        <Footer />
    </Container>
    )}
export default Maker;

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const InnerContainer = styled.div`
    background: white;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar{width:5px;}
    &::-webkit-scrollbar-thumb{background-color: blueviolet;}
    &::-webkit-scrollbar-track{background-color: lightsteelblue;}
`;