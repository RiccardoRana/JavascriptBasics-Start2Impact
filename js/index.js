
//Creo il contenuto

let body = document.querySelector('body')
let title = document.createElement('h1')
let number = document.createElement('p')
let counters = document.createElement('div')
let counterPlus = document.createElement('button')
let counterLess = document.createElement('button')

let n = 0

//Funzione che viene eseguita immediatamente per visualizzare il tutto

function showElements() {

    title.textContent = 'Increase or decrease the number of this counter!'
    number.textContent = 0

    counters.className = 'buttons'

    counterPlus.className = 'plus'
    counterPlus.textContent = '+'

    counterLess.className = 'less'
    counterLess.textContent = '-'


    body.appendChild(title)
    body.appendChild(number)
    body.appendChild(counters)

    counters.appendChild(counterLess)
    counters.appendChild(counterPlus)

}

showElements()

//Evento

counters.addEventListener('click', determineCounter)

let counter = Number(number.innerHTML)

function determineCounter(e) {
    if (e.target.className === 'plus') {
        counter++
        number.textContent = counter
    } else if (e.target.className === 'less') {
        counter--
        number.textContent = counter
    } else {
        number.textContent = counter
    }
}








































