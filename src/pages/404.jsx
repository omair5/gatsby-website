import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const PageNotFound = () => {
    return (
        <MainContainer>
            <ChildContainer>
                <h1>EXPLORIX</h1>
                <h2>SORRY! PAGE NOT FOUND</h2>
                <Button title='Back To HomePage' linkto='/' />
            </ChildContainer>

        </MainContainer>
    );
}

export default PageNotFound;

const MainContainer = styled.div`
    background: #242222;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ChildContainer = styled.div`
text-align:center;
h1{
    color:#F26A2E;
    padding: 10px;
}
h2{
    color: white;
    padding: 10px;

}

`