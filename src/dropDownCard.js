import React from "react";

const DropDownCard = ({data = []}) => {
    <div className="cards">
        <ul className="text-left">
            {data.map((item, i) => (
                <li key={i} className="items">
                    {item}
                </li>
            ))}
        </ul>
    </div>
};

export default DropDownCard;