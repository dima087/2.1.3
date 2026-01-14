const gridContainer = document.getElementById('gridContainer');
const toggleBtn = document.getElementById('toggleBtn');
const image  = document.getElementById('img-end');


let isCollapsed = false;

toggleBtn.addEventListener('click', () => {
    if (isCollapsed) {
        gridContainer.classList.remove('collapsed');
        toggleBtn.textContent = 'Скрыть';
        image.style.transform = 'rotate(0deg)'

    } else {
        gridContainer.classList.add('collapsed');
        toggleBtn.textContent = 'Показать все';
        image.style.transform = 'rotate(180deg)'
    }
    isCollapsed = !isCollapsed;
});

const swiper = new Swiper('.swiper', {
    // Параметры
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Другие опции по желанию
});