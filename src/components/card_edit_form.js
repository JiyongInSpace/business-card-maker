import React from 'react';
import styled from 'styled-components';
import Button from './button';
import ImageFileInput from './image_file_input';

const CardEditForm = ({card}) => {
    const { name, company, theme, title, email, message, fileName, fileURL } = card;
    const onSubmit = () => {

    }
    return (
        <Form>
            <Input type="text" name="name" value={name} />
            <Input type="text" name="company" value={company} />
            <Select name="theme" value={theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="navy">navy</option>
            </Select>
            <Input type="text" name="title" value={title} />
            <Input type="text" name="email" value={email} />
            <Textarea name="message" value={message} />
            <ImageContainer>
                <ImageFileInput />
            </ImageContainer>
            <Button name='Delete' onClick={onSubmit} />
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