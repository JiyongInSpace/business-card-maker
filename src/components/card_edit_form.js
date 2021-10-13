import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from './button';

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const { name, company, theme, title, email, message, fileName } = card;

    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        })
    }

    const handleChange = (e) => {    
        if(e.currentTarget == null){
            return;
        }
        e.preventDefault();
        updateCard({
            ...card, [e.currentTarget.name]: e.currentTarget.value
        })
    }
    const handleSubmit = (e) => {
        deleteCard(card);
    }
    return (
        <Form>
            <Input 
                ref={nameRef} 
                type="text" 
                name="name" 
                value={name} 
                onChange={handleChange}
                placeholder="Name"/>
            <Input 
                ref={companyRef} 
                type="text" 
                name="company" 
                value={company} 
                onChange={handleChange}
                placeholder="Company"/>
            <Select 
                ref={themeRef} 
                name="theme" 
                value={theme} 
                onChange={handleChange}>
                <option value="light">Business_Light</option>
                <option value="dark">Business_Dark</option>
                <option value="navy">Business_Navy</option>
                <option value="sr_blue">SRcard_Blue</option>
                <option value="sr_red">SRcard_Red</option>
                <option value="chulip">Chu-lip</option>
            </Select>
            <Input 
                ref={titleRef} 
                type="text" 
                name="title" 
                value={title} 
                onChange={handleChange}
                placeholder="Job Title"/>
            <Input 
                ref={emailRef} 
                type="text" 
                name="email" 
                value={email} 
                onChange={handleChange}
                placeholder="Email"/>
            <Textarea 
                ref={messageRef} 
                name="message" 
                value={message} 
                onChange={handleChange}
                placeholder="Message"/>
            <ImageContainer>
                <FileInput name={fileName} onFileChange={onFileChange}/>
            </ImageContainer>
            <Button name='Delete' onClick={handleSubmit}/>
        </Form>
    );
};

export default CardEditForm;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;
const Input = styled.input`
    padding: 5px;
    &[name="name"],&[name="company"]{width: 33.33%};
    &[name="title"],&[name="email"]{width: 50%};
`;
const Select = styled.select`
    width: 33.33%;
    padding: 5px;
`;
const Textarea = styled.textarea`
    width: 100%;
    padding: 5px;
`;
const ImageContainer = styled.div`
    width: 50%;
`;