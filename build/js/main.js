//наведение на текст hover me 
let menu_text_hover = document.querySelector('.text-hover-1__field-ex-2');

function menu_text_hover_transition_end() {
    menu_text_hover.setAttribute('class', 'text-hover-1__field-ex-2');
};

menu_text_hover.addEventListener('mouseenter', ()=>{
    menu_text_hover.removeEventListener('transitionend', menu_text_hover_transition_end);
    menu_text_hover.classList.add('fade-forward');
});

menu_text_hover.addEventListener('mouseleave', ()=>{
    menu_text_hover.classList.add('fade-back');
    menu_text_hover.addEventListener('transitionend', menu_text_hover_transition_end);
});