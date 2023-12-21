import { main } from './fetch.mjs';

const form = document.getElementById('form');
const searchInput = document.getElementById('searchInput');
const velgAarstall = document.getElementById('velgAarstall');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    main(searchInput.value, velgAarstall.value, 0)
})


