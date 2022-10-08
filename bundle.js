'use strict';

window.onload = ()=>
{
    let all = document.querySelectorAll('sandbox');
    for(let sandbox of all)
    {
        sandbox.setAttribute('style','overflow: hidden; display:block;');
        let textbox = document.querySelector(sandbox.getAttribute('for'));
        let onChange = ()=>eval(sandbox.getAttribute('onChange'));
    
        sandbox.innerHTML = textbox.value;
        onChange();
        textbox.addEventListener('input',()=>
        {
            sandbox.innerHTML = textbox.value;
            onChange();
        }
        );
    }
};
