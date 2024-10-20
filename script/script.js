// Function to update the time
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    timeElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);
updateTime();

// Získání prvků
const openButton = document.getElementById('openButton');
const browserWindow = document.getElementById('browserWindow');
const closeButton = document.getElementById('closeButton');
const browserTop = document.querySelector('.browserTop');

let isDragging = false;
let offsetX, offsetY;

// Otevření okna
openButton.addEventListener('click', () => {
    browserWindow.style.display = 'block';
});

// Zavření okna
closeButton.addEventListener('click', () => {
    browserWindow.style.display = 'none';
});

// Začátek tažení při chycení za horní část (browserTop)
browserTop.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - browserWindow.offsetLeft;
    offsetY = e.clientY - browserWindow.offsetTop;
});

// Ukončení tažení
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Tažení okna po obrazovce
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Zajištění, aby okno nevyjelo mimo plochu
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const browserWidth = browserWindow.offsetWidth;
        const browserHeight = browserWindow.offsetHeight;

        // Omezení horizontálně
        if (newX < 0) newX = 0;
        if (newX + browserWidth > windowWidth) newX = windowWidth - browserWidth;

        // Omezení vertikálně
        if (newY < 0) newY = 0;
        if (newY + browserHeight > windowHeight) newY = windowHeight - browserHeight;

        // Nastavení nové pozice okna
        browserWindow.style.left = `${newX}px`;
        browserWindow.style.top = `${newY}px`;
    }
});