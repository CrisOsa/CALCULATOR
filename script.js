function sum() {
    const inputone = parseInt(document.querySelector('.inputone').value);
    const inputtwo = parseInt(document.querySelector('.inputtwo').value);
    const result = document.getElementById('result')
    const submit = parseInt(inputone) + parseInt(inputtwo)
    result.value = `${inputone} + ${inputtwo} = ${submit}`
}

function substract() {
    const inputone = parseInt(document.querySelector('.inputone').value);
    const inputtwo = parseInt(document.querySelector('.inputtwo').value);
    const result = document.getElementById('result')
    const submit = parseInt(inputone) - parseInt(inputtwo)
    result.value = `${inputone} - ${inputtwo} = ${submit}`
}

function multiply() {
    const inputone = parseInt(document.querySelector('.inputone').value);
    const inputtwo = parseInt(document.querySelector('.inputtwo').value);
    const result = document.getElementById('result')
    const submit = parseInt(inputone) * parseInt(inputtwo)
    result.value = `${inputone} * ${inputtwo} = ${submit}`
}

function divide() {
    const inputone = parseInt(document.querySelector('.inputone').value);
    const inputtwo = parseInt(document.querySelector('.inputtwo').value);
    const result = document.getElementById('result')
    const submit = parseInt(inputone) / parseInt(inputtwo)
    result.value = `${inputone} / ${inputtwo} = ${submit}`
}

function vanish() {
    const inputone = parseInt(document.querySelector('.inputone').value);
    const inputtwo = parseInt(document.querySelector('.inputtwo').value);
    const result = document.getElementById('result')
    const submit = ''
    result.value = submit
    inputone.value = submit
    inputtwo.value = submit
}