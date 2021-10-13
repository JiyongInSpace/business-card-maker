import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import { useHistory } from 'react-router';
import Editor from '../components/editor';
import Preview from '../components/preview';

const Maker = ({FileInput, authService, cardRepository}) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);

    const onLogout = () => {
        authService.logout();
    };
    
    const createOrUpdateCard = (card) => {
        const updated = {...cards};
        updated[card.id] = card;
        setCards(updated);
        cardRepository.saveCard(userId, updated);
    }
    const deleteCard = (card) => {
        const updated = {...cards};
        delete updated[card.id];
        setCards(updated);
        cardRepository.removeCard(userId, updated);
    }
    useEffect(() => {
        if(!userId){
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        })
        return () => stopSync();
    }, [userId])
    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            } else {
                history.push('/');
            }
        })
    })
    return (
    <Container>
        <Header onLogout={onLogout}/>
        <InnerContainer>
            <Editor cards={cards} 
                    FileInput={FileInput}
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
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const InnerContainer = styled.div`
    background: white;
    height: calc(100% - 115px);
    display: flex;
    flex-wrap: wrap;
`;