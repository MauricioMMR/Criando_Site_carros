let antesButton = document.getElementById('antes')
let proximoButton = document.getElementById('proximo')
let container = document.querySelector('.container')
let item = container.querySelectorAll('.list .item')
let indicators = document.querySelector('.indicators')
let dots = indicators.querySelectorAll('ul li')
let list = container.querySelector('.list')


let active = 0

let firstPosition = 0

let lastPosition = item.length - 1

function setSlider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

    indicators.querySelector('.numeros').innerHTML = '0' + (active + 1)
}

proximoButton.onclick = () => {
    list.style.setProperty(' --calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    item[active].classList.add('active')

}


antesButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    item[active].classList.add('active')

}
