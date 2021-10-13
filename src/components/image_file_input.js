import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const handleClick = e => {
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange = async (e) => {
        setLoading(true);
        const uploaded = await imageUploader.upload(e.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
    }
    return (
        <Container>
            <input 
                ref={inputRef} 
                type="file"
                accept="image/*" 
                name="file"
                onChange={onChange} />
            {!loading && <Btn onClick={handleClick} name={name}>{name || 'No Image'}</Btn>}
            {loading && <Loader>Loading...</Loader>}
        </Container>
    );
}

export default ImageFileInput;


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    input{display: none;};
`;
const Btn = styled.button`
    width: 100%;
    background-color: ${props => props.name ? "pink" : "lavender"};
    border: none;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`; 
const Loader = styled.div`
    background-color: lavender;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
`;
