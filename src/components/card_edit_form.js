import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from './button';
import ImageFileInput from './image_file_input';

const CardEditForm = ({card, updateCard, deleteCard}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const { name, company, theme, title, email, message, fileName, fileURL } = card;
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
                onChange={handleChange}/>
            <Input 
                ref={companyRef} 
                type="text" 
                name="company" 
                value={company} 
                onChange={handleChange}/>
            <Select 
                ref={themeRef} 
                name="theme" 
                value={theme} 
                onChange={handleChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="navy">navy</option>
            </Select>
            <Input 
                ref={titleRef} 
                type="text" 
                name="title" 
                value={title} 
                onChange={handleChange}/>
            <Input 
                ref={emailRef} 
                type="text" 
                name="email" 
                value={email} 
                onChange={handleChange}/>
            <Textarea 
                ref={messageRef} 
                name="message" 
                value={message} 
                onChange={handleChange}/>
            <ImageContainer>
                <ImageFileInput />
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