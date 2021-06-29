import React from 'react';
import "./Score.scss";

export default function Score({result}) {
    return (
        <article className="score_container br shadow pt-4 pb-4 pr-6 pl-6">
            <span>{result}</span>
        </article>
    )
}
