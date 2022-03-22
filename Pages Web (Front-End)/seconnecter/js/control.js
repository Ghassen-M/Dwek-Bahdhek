const sinscrire = document.getElementById('sinscrire');
const seconnecter = document.getElementById('seconnecter');
const container = document.getElementById('container');

sinscrire.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

seconnecter.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});