import React from 'react';
import styled from 'styled-components';

const Preview = (props) => {


    return <Container>
        <TabTitle>Card Preview</TabTitle>
    </Container>;
};

export default Preview;

const Container = styled.div`
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