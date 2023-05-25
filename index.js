(function(){
    const cabecalhoNavA = document.querySelectorAll('.cabecalho nav a');
    const [a1, a2, a3, a4, a5] = cabecalhoNavA;

    const botaoHome = document.querySelector('.container-home a');

    const logoRodape = document.querySelector('.rodape a');
    const logoRodapeIMG = document.querySelector('.rodape a img');

    const cabecalhoOcultoNavA = document.querySelectorAll('.cabecalho-oculto nav a');
    const [aO1, aO2, aO3, aO4, aO5] = cabecalhoOcultoNavA;

    document.addEventListener('click', e => {

        const el = e.target;
       
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
    })

})();