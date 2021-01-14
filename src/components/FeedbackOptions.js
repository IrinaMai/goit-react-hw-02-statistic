import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            {Object.keys(options).map(item => <button key = {item} type="button" name={item} onClick = {onLeaveFeedback}>{item.toUpperCase()}</button>)}
  
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
}