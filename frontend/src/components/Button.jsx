import React from 'react';

export const Button = ({ css, event, text }) => {
    return (
        <button className={css} onClick={event} > {text} </button>
        )
}
