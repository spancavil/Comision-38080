import React from "react";

const ReturnTemprano = ({ condition }) => {
    
    //Falsy: 0, undefined, null, "", NaN
    
    if (condition) {
        return <h3>Se cumple la condición</h3>;
    }

    return <h3>No se cumple la condición</h3>
};

export default ReturnTemprano;
