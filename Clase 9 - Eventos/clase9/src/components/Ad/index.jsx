import React from "react";

const Ad = ({ children }) => {
    //Children es el contenido dinámico que vendrá dentro de las etiquetas de apertura y cierre de Ad
    return <div>
        {children}
    </div>;
};

export default Ad;
