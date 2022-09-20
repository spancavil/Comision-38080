import React, { useState } from 'react'

const ButtonCount = ({ onConfirm, maxQuantity, id}) => {

    const [value, setValue] = useState(1);

    console.log("Se vuelve a renderizar el count ", id);

    const handleConfirm = () => {
        if (value <= maxQuantity) {
            onConfirm(value)
        }
        else {
            alert("Value > maxQuantity")
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <button onClick={() => setValue(value => value+1)}>+</button>
            <span>{value}</span>
            <button onClick={() => setValue(value => value-1)}>-</button>
            <button onClick={handleConfirm}>Confirm</button>
        </div>
    )
}

export default ButtonCount