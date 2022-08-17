import React from "react";

const Button = ({onClick}) => (
    <button className="buttons" onClick={onClick}>
        Search by date
    </button>
);

export default Button