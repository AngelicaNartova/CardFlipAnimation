const card = document.querySelector('.card__inner');

card.addEventListener('click', () => {
    card.classList.toggle('card-inner-flipped');
})