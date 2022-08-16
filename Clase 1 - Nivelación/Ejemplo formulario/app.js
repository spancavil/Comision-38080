const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e)=> {
    // e.preventDefault();
    
    console.log(formulario.elements['fname'].value);
})