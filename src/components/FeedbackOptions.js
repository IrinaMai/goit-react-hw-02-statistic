import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            {Object.keys(options).map(item => <Btn key = {item} type="button" name={item} onClick = {onLeaveFeedback}>{item.toUpperCase()}</Btn>)}
  
        </>
    )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.exact({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }),
    onLeaveFeedback: PropTypes.func.isRequired
};

const Btn = styled.button`
border: none;
outline: none;
background: LightGrey;
margin-right: 10px;
padding-right: 10px;
padding-left: 10px;
border-radius: 3px;
font-weight: bold;
&:hover {
    background: DimGrey;
    color: white;
}
`;
