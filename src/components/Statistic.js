import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StyledUl>
            <li>Good: <span>{good}</span></li>
            <li>Neutral: <span>{neutral}</span></li>
            <li>Bad: <span>{bad}</span></li>
            <li>Total: <span>{total}</span></li>
            <li>Positive feedback: <span>{total ? positivePercentage : 0}%</span></li>
        </StyledUl>
    )
}

export default Statistic;

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

const StyledUl = styled.ul`
padding: 0;
`;