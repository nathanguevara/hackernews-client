import React from "react";
import Button from "./button";
import DropDownCard from "./dropDownCard";

const sampleData = new Array(7).fill("item name");

const ButtonWithDropDownCmpt = () => {
    return (
        <div className="realative m-4">
            <Button />
            <DropDownCard data={sampleData} />
        </div>
    )
}

export default ButtonWithDropDownCmpt