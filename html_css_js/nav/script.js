
const bMore = document.querySelector('#bMore');
bMore.addEventListener('click', (e) => {
    const links = document.querySelector('#links');
    links.classList.toggle('collapsed');
});
