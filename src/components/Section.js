import React from 'react';
import styled from 'styled-components';

const Section = ({ title, children }) => {
    return (
        <Blocks>
            <h2>{title}</h2>
            {children}
        </Blocks>
    )
}
export default Section


const Blocks = styled.section`
width: 1100px;
margin: 10px auto;
/* outline: 1px solid tomato; */
padding: 10px;
`;