// Importation des variables !

let root = document.querySelector(':root')
let rootStyles = getComputedStyle(root)
let survol = rootStyles.getPropertyValue('--survol')

// Génération des cases !

let container = document.querySelector('.container')
for (let c=1; c<25; c++) {
    container.innerHTML += `<div class='case case${c}'>${c}</div>`
}

// Fonctionnement des cases !

let boxes = document.querySelectorAll('.case')
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        boxes.forEach((otherBoxes) => otherBoxes.style.visibility = 'hidden')
        box.style.visibility = 'visible'
        /* box.style.transition = 'transform 5s';
        box.style.transform = 'rotateY(-135deg)'; */
        root.style.setProperty('--survol', 'none')
        box.style.background = 'white'
        box.style.border = 'none'
        box.style.borderRadius = '0px'
        box.style.position = 'absolute'
        box.style.top = '0'
        box.style.left = '0'
        box.style.height = '100vh'
        box.style.width = '100vw'
        
    })
})