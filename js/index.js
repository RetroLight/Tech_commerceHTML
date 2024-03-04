const menuBtn = document.querySelector('.mob_menu_btn');
const closeMobMenu = document.querySelector('.cross_ico');
const mobMenu = document.querySelector('.mob_menu_block .mob_menu');

const switchInfoBtnGroup = document.querySelectorAll('.switch_info_btn');
const productDetails = document.querySelector('.info_container');
const charsInfo = document.querySelector('.info_container .detailed_info_content');
const docsInfo = document.querySelector('.info_container .detailed_info_docs');

const decrCounterBtn = document.querySelector('.counter_block .minus');
const incrCounterBtn = document.querySelector('.counter_block .plus');
const counterValHtml = document.querySelector('.counter_block .counter_val');


menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobMenu.classList.add('active')
})
closeMobMenu.addEventListener('click', (e) => {
    e.preventDefault();
    mobMenu.classList.remove('active')
})


switchInfoBtnGroup.forEach((button) => {
    productDetails.innerHTML = '';
    productDetails.appendChild(charsInfo);
    button.addEventListener("click", (e) => {
        if (e.target.classList.contains('chars')) {
            switchInfoBtnGroup.forEach((button) => {
                button.classList.remove('active')
            })
            productDetails.innerHTML = '';
            productDetails.appendChild(charsInfo);
            e.target.classList.add('active')
        } else if (e.target.classList.contains('docs')) {
            switchInfoBtnGroup.forEach((button) => {
                button.classList.remove('active')
            })
            productDetails.innerHTML = '';
            productDetails.appendChild(docsInfo);
            e.target.classList.add('active')
        }
    });
});

let counterVal = 0;
counterValHtml.innerHTML = counterVal

decrCounterBtn.addEventListener('click', () => {
    if (counterVal !== 0) {
        counterVal--
        counterValHtml.innerHTML = counterVal;
    }
    return
})
incrCounterBtn.addEventListener('click', () => {
    counterVal++
    counterValHtml.innerHTML = counterVal;
})





