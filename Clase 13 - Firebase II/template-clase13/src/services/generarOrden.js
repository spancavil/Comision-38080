//Función auxiliar para generar la orden.
const ordenGenerada = (nombre, email, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            email: email
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;