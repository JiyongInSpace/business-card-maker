import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Login = ({ authService }) => {
    const goToMaker = userId => {
        history.push({
            pathname: '/maker',
            state: { id: userId },
        });
    }
    const history = useHistory();
    const onLogin = e => {
        authService
        .login(e.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    }
    useEffect(() => {
        authService
        .onAuthChange(user => {
            user && goToMaker(user.uid)
        })
    })

    return (
        <Container>
            <Header />
            <InnerContainer>
                <Title>LOGIN</Title>
                <ul>
                    <li><Button onClick={onLogin}>Google</Button></li>
                    <li><Button onClick={onLogin}>Github</Button></li>
                </ul>
            </InnerContainer>
            <Footer />
        </Container>
    )
};

export default Login;

const Container = styled.section`
    width: 30em;
    text-align: center;
    background-color: white;
`;
const InnerContainer = styled.section`
    padding: 30px 20px;
`;
const Title = styled.h3`
    margin-bottom: 10px;
    color: navy;
`;
const Button = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 5px;
    border: 2px solid blueviolet;
    background-color: inherit;
    color: navy;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        border: 2px solid violet;
        background-color: violet;
        color: white;
    }
`;