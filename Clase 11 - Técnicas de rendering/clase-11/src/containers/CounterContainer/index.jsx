import React, { useState } from 'react';
// import ButtonCount from '../../components/ButtonCount';
import MemoButtonCount from '../../components/MemoButtonCount';
// import MemoButtonCount from '../components/MemoButtonCount';

const CounterContainer = () => {

    const handleConfirm = () => {
        console.log("Se agrego al cart");
    }

    console.log("Se vuelve a renderizar el container (parent)");

    const [state, setState] = useState(false)

    const counters = [
        {
            onConfirm: React.useCallback(handleConfirm, []),
            maxQuantity: 10
        },
        {
            onConfirm: React.useCallback(handleConfirm, []),
            maxQuantity: 15
        },
        {
            onConfirm: handleConfirm,
            maxQuantity: 3
        }
    ]
    return (
        <>
            {counters.map((counter, index) => {
                return <MemoButtonCount
                    maxQuantity={counter.maxQuantity}
                    onConfirm={counter.onConfirm}
                    id = {index}
                    key = {index}
                />
            })}
            <button onClick={() => setState(!state)}>Change container state</button>
            <h2>El estado está en: {state.toString()}</h2>
        </>
    )
}

export default CounterContainer;