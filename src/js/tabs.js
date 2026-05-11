// Инициализация табов
function initTabs() {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabPanels = document.querySelectorAll('.about__panel');

    if (!tabButtons.length) return; // Если на странице нет табов, не выполняем код (например, на contact.html)

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-tab');

            // 1. Убираем класс active у всех кнопок
            tabButtons.forEach(btn => {
                btn.classList.remove('about__values-item--active');
                btn.setAttribute('aria-selected', 'false');
            });

            // 2. Убираем класс active у всех текстовых панелей
            tabPanels.forEach(panel => {
                panel.classList.remove('about__panel--active');
            });

            // 3. Добавляем класс active нажатой кнопке
            button.classList.add('about__values-item--active');
            button.setAttribute('aria-selected', 'true');

            // 4. Показываем нужную текстовую панель
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('about__panel--active');
            }
        });
    });
}

// Запускаем, когда DOM готов
document.addEventListener('DOMContentLoaded', initTabs);