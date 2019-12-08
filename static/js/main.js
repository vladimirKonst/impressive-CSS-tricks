//наведение на текст 2 в блоке с текстом номер 1 
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
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// наведение на текст 3 в блоке с текстом номер 1
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let text_block_1_elem_3 = document.querySelector('.text-hover-1__js');
let change_inner_html = false;
let quantity_counter = 0;

text_block_1_elem_3.addEventListener('mouseenter', block1_text3_mouseenter);
text_block_1_elem_3.addEventListener('mouseleave', block1_text3_mouseleave);

function block1_text3_mouseenter() {
    let symbols = [...text_block_1_elem_3.textContent];
    let spans_array;
    let spans_string;
    let all_symbols;

    [...text_block_1_elem_3.querySelectorAll('.inner-js-span')].forEach((el) => {
        el.classList.remove('inner-js-span-changed-back');
    });

    if (!change_inner_html) {
        spans_array = symbols.map(elem => {
            return `<span class="inner-js-span">${elem}</span>`;
        });
        spans_string = spans_array.reduce((concat, current) => {
            return concat += current;
        });
        text_block_1_elem_3.innerHTML = spans_string;
        change_inner_html = true;
    }
    all_symbols = text_block_1_elem_3.querySelectorAll('.inner-js-span');

    [...all_symbols].forEach((element) => {
        if (!isNaN(+element.textContent)) {
            element.style.width = '7px';
        }
    })

    function for_every_single_symbol() {
        new Promise((resolve, reject) => {
            all_symbols[quantity_counter].classList.add('inner-js-span-changed');
            setTimeout(resolve, 40);
        }).then(
            result => {
                if (quantity_counter < all_symbols.length - 1) {
                    quantity_counter++;
                    for_every_single_symbol();
                }
            },
            error => alert('something went wrong.....')
        )
    }
    for_every_single_symbol();
}

function block1_text3_mouseleave() {
    let all_symbols = text_block_1_elem_3.querySelectorAll('.inner-js-span');

    function for_every_single_symbol() {
        new Promise((resolve, reject) => {
            all_symbols[quantity_counter].classList.add('inner-js-span-changed-back');
            quantity_counter--;
            setTimeout(resolve, 40);
        }).then(
            result => {
                if (quantity_counter >= 0) {
                    for_every_single_symbol();
                } else {
                    [...text_block_1_elem_3.querySelectorAll('.inner-js-span')].forEach((el) => {
                        el.classList.remove('inner-js-span-changed');
                        quantity_counter = 0;
                    });
                }
            },
            error => alert('something went wrong.....')
        )
    }
    for_every_single_symbol();
}