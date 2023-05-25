(function(){

    const linksA = document.querySelectorAll('.links a');

    document.addEventListener('click', e => {

        const el = e.target;

        for(let linkA of linksA){
            if(linkA == el){
                e.preventDefault();
                const href = el.getAttribute('href');
                window.open(href)
            }
        }
    })

})();