const input = document.getElementById('input')
const output = document.getElementById('insert-name')
const button = document.getElementById('nameButton')
const pinkButton = document.getElementById('pinkButton')
const lightGreenButton = document.getElementById("lightGreenButton")
const lightGlueButton = document.getElementById('lightBlueButton')

button.addEventListener('click', () => {
    const value = input.value;
    output.textContent = value;
})

