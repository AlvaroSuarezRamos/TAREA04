/*Declaramos las variables*/
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
/*Añadimos un evento para cunado se haga click en el botón next*/
let currentActive = 1 
next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})
/*Añadimos un evento para cunado se haga click en el botón prev*/
prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1){
        currentActive = 1
    }
    update()
})
/*Hacemos que el círculo esté activo o no, es decir en verde o en negro dependiendo de si le das a next o no*/ 
function update(){
    circles.forEach((circle, idx) => {
        if (idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 +'%'
    if (currentActive === 1){
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
