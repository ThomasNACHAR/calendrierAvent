let container = document.querySelector('.container');
for (let c=1; c<25; c++) {
    container.innerHTML += `<div class='case case${c}'>${c}</div>`
}