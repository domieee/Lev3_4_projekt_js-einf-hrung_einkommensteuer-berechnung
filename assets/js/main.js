const basic = document.querySelector('#basic')
const split = document.querySelector('#split')
const inputBasic = document.querySelector('.inputBasic')
const inputSplit = document.querySelector('.inputSplit')
const submit = document.querySelector('#submit')
const output = document.querySelector('#output')
const humanOne = document.querySelector('#humanOne')
const humanTwo = document.querySelector('#humanTwo')
const year = document.querySelector('#year')

function change() {
    if (split.checked) {
        inputSplit.style.display = 'block'
    } else {
        inputSplit.style.display = 'none'
    }
}

function calculateTwenty(zvE, ESt) {
    if (zvE <= 9408) {
        ESt = 0
    } else if (zvE <= 14532) {
        ESt = (972.87 * (zvE - 9408) / 10000 + 1400) * 2
    } else if (zvE <= 57051) {
        ESt = (212.02 * (zvE - 14532) / 10000 + 2397) * (zvE - 14532) / 10000 + 972.79
    } else if (zvE <= 270500) {
        ESt = 0.42 * zvE - 8963.74
    } else {
        ESt = 0.45 * zvE - 17078.74
    }
    output.innerHTML = ESt.toFixed(2) + ' €'
}

function calculateTwentyOne(zvE, ESt) {
    if (zvE <= 9744) {
        ESt = 0
    } else if (zvE > 9745 && zvE < 14753){
        ESt = (995.21 * (zvE - 9744) / 10000 + 1400) * (zvE - 9744) / 10000
    } else if (zvE > 14754 && zvE < 57918) { 
        ESt = (208.85 * (zvE - 14753) / 10000 + 2397) * (zvE - 14753) / 10000 + 950.06
    } else if (zvE > 57919 && zvE < 274612) {
        ESt = 0.42 * zvE - 9163.63
    } else {
        ESt = 0.45 * zvE - 17374.99
    }
    output.innerHTML = ESt.toFixed(2) + ' €'
}

function calculateTwentyTwo(zvE, ESt) {
    if (zvE <= 10347) {
        ESt = 0
    } else if (zvE > 10348 && zvE < 14926){
        ESt = (1088.67 * (zvE - 10347) / 10000 + 1400) * (zvE - 10347) / 10000
    } else if (zvE > 14927 && zvE < 58596) { 
        ESt = (206.43 * (zvE - 14926) / 10000 + 2397) * (zvE - 14926) / 10000 + 869.32
    } else if (zvE > 58597 && zvE < 277825) {
        ESt = 0.42 * zvE - 9336.45
    } else {
        ESt = 0.45 * zvE - 17671.20
    }
    output.innerHTML = ESt.toFixed(2) + ' €'
}

function getYear(zvE) {
    let ESt;
    if (document.getElementById('twenty').checked) {
        calculateTwenty(zvE, ESt)
    } else if (document.getElementById('twentyOne').checked) {
        calculateTwentyOne(zvE, ESt)
    } else {
        calculateTwentyTwo(zvE, ESt)
    }
}

function getCases() {
    let zvE
    if (document.querySelector('#basic').checked) {
        zvE = parseFloat(humanOne.value)
    } else {
        zvE = (parseFloat(humanOne.value) + parseFloat(humanTwo.value)) / 2
    }
    getYear(zvE)
}

submit.addEventListener('click', getCases)

