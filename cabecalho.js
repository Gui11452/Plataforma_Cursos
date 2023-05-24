(function(){
    const cabecalhoDropdownP = document.querySelector('.cabecalho .dropdown>p');
    const cabecalhoDropdownDiv = document.querySelector('.cabecalho .dropdown>div');
    const cabecalhoDropdownArrow = document.querySelector('.cabecalho .dropdown>p img');

    const cabecalhoOcultoDropdownP = document.querySelector('.cabecalho-oculto .dropdown>p');
    const cabecalhoOcultoDropdownDiv = document.querySelector('.cabecalho-oculto .dropdown>div');
    const cabecalhoOcultoDropdownArrow = document.querySelector('.cabecalho-oculto .dropdown>p img');

    const cabecalhoDropdownA = document.querySelectorAll('.dropdown a');

    const botao = document.querySelector('.botao');
    const botaoSpan = document.querySelectorAll('.botao span');
    const [span1, span2, span3] = botaoSpan;
    const cabecalhoOculto = document.querySelector('.cabecalho-oculto');

    document.addEventListener('click', e => {

        const el = e.target;

        if(el == cabecalhoDropdownP || el == cabecalhoDropdownArrow){
            cabecalhoDropdownDiv.classList.toggle('dropdown-mostrar');
        } else if(el == cabecalhoOcultoDropdownP || el == cabecalhoOcultoDropdownArrow){
            cabecalhoOcultoDropdownDiv.classList.toggle('dropdown-mostrar');
        }

        if(el === botao || el === span1 || el === span2 || el === span3){
            span1.classList.toggle('span-um');
            span2.classList.toggle('span-dois');
            span3.classList.toggle('span-tres');
            cabecalhoOculto.classList.toggle('mostrar-cabecalho-oculto');
        }

        for(let aD of cabecalhoDropdownA){
            if(el == aD){
                e.preventDefault();
                let linkHref = el.getAttribute('href');
                window.open(linkHref);
            }

        }

    })

})();