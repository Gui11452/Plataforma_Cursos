(function(){

    const botao = document.querySelector('.botao');
    const botaoSpan = document.querySelectorAll('.botao span');
    const [span1, span2, span3] = botaoSpan;
    const cabecalhoOculto = document.querySelector('.cabecalho-oculto');
    const button = document.querySelector('.button');
    const alerta = document.querySelector('.alert');
    const buttonP = document.querySelector('.button-paragrafo');
    const cabecalhoNavA = document.querySelectorAll('.cabecalho nav a');
    const [a1, a2, a3, a4, a5] = cabecalhoNavA;

    const botaoHome = document.querySelector('.container-home a');

    const logoRodape = document.querySelector('.rodape a');
    const logoRodapeIMG = document.querySelector('.rodape a img');

    const cabecalhoOcultoNavA = document.querySelectorAll('.cabecalho-oculto nav a');
    const [aO1, aO2, aO3, aO4, aO5] = cabecalhoOcultoNavA;

    const formSubmitedP = document.querySelector('.form-submited');
    const inputFormSubmited = document.querySelector('.input-form-submited');

    document.addEventListener('click', e => {

        const el = e.target;
        
        if(el === botao || el === span1 || el === span2 || el === span3){
            span1.classList.toggle('span-um');
            span2.classList.toggle('span-dois');
            span3.classList.toggle('span-tres');
            cabecalhoOculto.classList.toggle('mostrar-cabecalho-oculto');
        }
        if(el == button){
            e.preventDefault();
            buttonP.innerHTML = 'Button successfully clicked!';
        }
        if(el == alerta){
            e.preventDefault();
            alert('This is an alert!');
        }
        
        if(el === a1 || el === a2 || el === a3 || el === a4 ||
            el === aO1 || el === aO2 || el === aO3 || el === aO4 || el === logoRodape
            || el === logoRodapeIMG || el == botaoHome || el == a5 || el == aO5){
            e.preventDefault();
            const classeContainer = el.getAttribute('href');
            const to = document.querySelector(classeContainer).offsetTop;

            scroll({
                top: to - 80,
                behavior: 'smooth',
            })
        }
        if(el == inputFormSubmited){
            e.preventDefault();
            formSubmitedP.innerHTML = 'Form submitted';
        }

    })

})();