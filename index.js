const gridContainer = document.getElementById('gridContainer');
const toggleBtn = document.getElementById('toggleBtn');
const image = document.getElementById('img-end');

let isCollapsed = true; // начальное состояние — СКРЫТО (max-height: 160px)

// Инициализация состояния
gridContainer.classList.add('collapsed');
toggleBtn.textContent = 'Показать все';
image.style.transform = 'rotate(180deg)';

toggleBtn.addEventListener('click', () => {
    if (isCollapsed) {
        // Раскрываем
        gridContainer.classList.remove('collapsed');
        toggleBtn.textContent = 'Скрыть';
        image.style.transform = 'rotate(0deg)';
    } else {
        // Скрываем
        gridContainer.classList.add('collapsed');
        toggleBtn.textContent = 'Показать все';
        image.style.transform = 'rotate(180deg)';
    }
    isCollapsed = !isCollapsed;
});

// Инициализация Swiper ТОЛЬКО если он видим (или всегда — Swiper сам оптимизирует)
const swiper = new Swiper('.swiper', {
    loop: false, // лучше не использовать loop с фиксированным набором брендов
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Авто-адаптация под ширину
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 12,
        },
        480: {
            slidesPerView: 2.2,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        }
    }
});