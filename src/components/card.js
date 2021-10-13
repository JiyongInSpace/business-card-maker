import React from 'react';
import styled from 'styled-components';
import defaultLogo from '../assets/default_logo.png';
import assets from '../assets';

const Card = ({card}) => {
    const DEFAULT_IMAGE = defaultLogo;
    const { name, company, theme, title, email, message, fileName, fileURL } = card;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <CardContainer className={theme} img={url}>
            <ImgBg img={url} className={theme} bg={assets}/>
            <Info className={theme}>
                <Name className={theme}>{name}</Name>
                <Company className={theme}>
                    <span className="material-icons">business</span>{company}</Company>
                <p><span className="material-icons">title</span>{title}</p>
                <p><span className="material-icons">mail</span>{email}</p>
                <p><span className="material-icons">chat</span>{message}</p>
            </Info>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.li`
    min-width: 350px;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    position: relative;
    align-items: center;
    padding: 20px;
    box-shadow: 3px 2px 5px 2px rgba(0, 0, 0, 0.4);
    &.dark{
        background-color: rgba(0,0,0,0.9);
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
    &.sr_blue, &.sr_red, &.chulip{
        min-width: unset;
        width: 240px; min-height: 300px;
        background-image: ${props => `url(${props.img})`};
        background-size: contain;
        background-repeat: no-repeat;
        padding: 0;
    }
`;
const ImgBg = styled.figure`
    width: 130px; height: 130px;
    border-radius: 10px;
    background-image: ${props => `url(${props.img})`};
    background-color: white;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 10px;
    flex-shrink: 0;
    &.sr_blue, &.sr_red, &.chulip{
        background-color: unset;
        width: 100%; height: 100%;
    }
    &.sr_blue{
        background-image: ${props => `url(${props.bg.srCardB})`};
    }
    &.sr_red{
        background-image: ${props => `url(${props.bg.srCardR})`};
    }
    &.chulip{
        background-image: ${props => `url(${props.bg.chulip})`};
    }
`;
const Info = styled.div`
    width: 100%;
    p{
        display: flex;
        align-items: center;
        margin-bottom: 3px;
    }
    .material-icons{
        font-size: 1em;
        margin-right: 5px;
    }
    &.sr_blue, &.sr_red, &.chulip{
        position: absolute;
        padding: 5px;
        left: 10px; bottom: 10px;
        border-radius: 10px;
        font-size: 0.8em;
        width: calc(100% - 20px);
    }
`;
const Name = styled.h2``;
const Company = styled.p`
    width: 100%;
    padding: 5px 0 10px 0;
    border-bottom: 1px solid;
`;

