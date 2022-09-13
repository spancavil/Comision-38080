import React from "react";
import './styles.scss';

const Modal = () => {

    const handleSubmit = (e) => {
        console.log(e);
    }

    return (
        <div className="background">
            <form className="modal-container" onSubmit={handleSubmit}>
                <h2 className="title">Título del modal</h2>
                <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati incidunt, blanditiis quia ea in delectus repudiandae? Nostrum at officiis voluptatem, sit pariatur iure expedita hic impedit quasi velit magnam?</p>
                <div className="buttons-container">
                    <button className="rounded-button-cancel" type="button">Close</button>
                    <button className="rounded-button-send" type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;
