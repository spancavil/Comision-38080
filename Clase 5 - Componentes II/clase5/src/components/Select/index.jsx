import React from "react";

const Select = ({handleColor}) => {
    return (
        <select name="navColor" id="navColor" onChange={handleColor}>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="#f3f3f3">Default</option>
        </select>
    );
};

export default Select;
