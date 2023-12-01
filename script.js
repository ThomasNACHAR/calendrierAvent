// Importation des variables !

let root = document.querySelector(':root')
let rootStyles = getComputedStyle(root)
let survol = rootStyles.getPropertyValue('--survol')

// Génération des cases !

let containers = document.querySelectorAll('.container')
for (let c=1; c<25; c++) {
    containers[0].innerHTML += `<div class='fond fond${c}'></div>`

    containers[1].innerHTML += 
    `<div>
        <div class='closed closed${c}'>
        </div>
        <div class='case case${c}'>
        <p>${c}</p>
    </div>
    </div>`
}

// Décoration du titre !

let title = document.querySelector('header h1')/* 
let boxColor = document.querySelector('.case')
let numberColor = document.querySelector('.case p') */
let timerTitle = 0
let intervalTitle = setInterval(() => {
    timerTitle==0 ? title.style.color = 'red' : title.style.color = 'white'/* 
    timerTitle==0 ? boxColor.style.background = 'blue' : boxColor.style.background = 'red'
    timerTitle==0 ? numberColor.style.color = 'red' : numberColor.style.color = 'white' */
    timerTitle=(timerTitle+1)%2
},1000)

// Fonctionnement des cases !

let boxes = document.querySelectorAll('.case')
let boxesBG = document.querySelectorAll('.fond')
let closed = document.querySelectorAll('.closed')
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        boxes.forEach((otherBoxes) => otherBoxes.style.visibility = 'hidden')
        boxesBG.forEach((otherBoxesBG) => otherBoxesBG.style.visibility = 'hidden')
        closed.forEach((allClosed) => allClosed.style.visibility = 'hidden')
        boxesBG[index].style.visibility = 'visible'

        /* box.style.transition = 'transform 5s';
        box.style.transform = 'rotateY(-135deg)'; */
        /* root.style.setProperty('--survol', 'none')
        box.style.background = 'white'
        box.style.border = 'none'
        box.style.borderRadius = '0px'
        box.style.position = 'absolute'
        box.style.top = '0'
        box.style.left = '0'
        box.style.height = '100vh'
        box.style.width = '100vw' */
        
    })
})