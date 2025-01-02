let isEnglish = false;

function toggleLanguage() {
    isEnglish = !isEnglish;
    const zhElements = document.querySelectorAll('.zh');
    const enElements = document.querySelectorAll('.en');
    const langBtn = document.getElementById('langBtn');

    if (isEnglish) {
        zhElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
        langBtn.textContent = '中文';
    } else {
        zhElements.forEach(el => el.style.display = 'block');
        enElements.forEach(el => el.style.display = 'none');
        langBtn.textContent = 'English';
    }
} 