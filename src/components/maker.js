import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer'
import { useHistory } from 'react-router';
import Editor from './editor';
import Preview from './preview';

const Maker = ({authService}) => {
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };
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
            <Editor></Editor>
            <Preview></Preview>
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
const Tab = styled.section`
    width: 50%; height: 100%;
    @media ${props => props.theme.tablet}{
        width: 100%;
    }
`;
const TabTitle = styled.h4`
    text-align: center;
    padding: 20px;
    color: navy;
    font-size: 1.5em;
`;