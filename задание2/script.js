const btn = document.querySelector('.btn');
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;



btn.addEventListener('click', () => {
    alert(`Размер экрана твоего девайса ${screenWidth} x ${screenHeight}`)
})
