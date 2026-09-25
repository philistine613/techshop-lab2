document.addEventListener('DOMContentLoaded', function() {
    console.log('TechShop: сайт загружен');

    // Простая проверка формы поиска
    const searchForm = document.querySelector('form[action="search.html"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const query = this.querySelector('input[name="q"]').value.trim();
            if (!query) {
                e.preventDefault();
                alert('Введите поисковый запрос');
            }
        });
    }
});