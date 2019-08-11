const imgContainer = document.querySelector('.img-container');

for (let i = 0; i < 9; i++) {
    let div = document.createElement('div');
    div.classList.add('img-item');
    div.innerHTML = `<img src="https://picsum.photos/200/300" alt="flex-picture"/>`
    imgContainer.appendChild(div);
}