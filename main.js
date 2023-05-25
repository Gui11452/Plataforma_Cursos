(function(){

    const button = document.querySelector('.button');
    const alerta = document.querySelector('.alert');
    const buttonP = document.querySelector('.button-paragrafo');

    const formSubmitedP = document.querySelector('.form-submited');
    const inputFormSubmited = document.querySelector('.input-form-submited');

    document.addEventListener('click', e => {

        const el = e.target;
    
        if(el == button){
            e.preventDefault();
            buttonP.innerHTML = 'Button successfully clicked!';
        }
        if(el == alerta){
            e.preventDefault();
            alert('This is an alert!');
        }
        
        if(el == inputFormSubmited){
            e.preventDefault();
            formSubmitedP.innerHTML = 'Form submitted';
        }

    })

})();