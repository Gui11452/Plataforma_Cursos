(function(){
    const cabecalhoDropdownP = document.querySelector('.cabecalho .dropdown>p');
    const cabecalhoDropdownDiv = document.querySelector('.cabecalho .dropdown>div');
    const cabecalhoDropdownArrow = document.querySelector('.cabecalho .dropdown>p img');

    const cabecalhoOcultoDropdownP = document.querySelector('.cabecalho-oculto .dropdown>p');
    const cabecalhoOcultoDropdownDiv = 
    document.querySelector('.cabecalho-oculto .dropdown>div');
    const cabecalhoOcultoDropdownArrow = 
    document.querySelector('.cabecalho-oculto .dropdown>p img');

    const cabecalhoDropdownA = document.querySelectorAll('.dropdown a');

    document.addEventListener('click', e => {

        const el = e.target;

        if(el == cabecalhoDropdownP || el == cabecalhoDropdownArrow){
            cabecalhoDropdownDiv.classList.toggle('dropdown-mostrar');
        } else if(el == cabecalhoOcultoDropdownP || el == cabecalhoOcultoDropdownArrow){
            cabecalhoOcultoDropdownDiv.classList.toggle('dropdown-mostrar');
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