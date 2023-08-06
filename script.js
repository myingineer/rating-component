const mainContainer = document.querySelector('.first-main-container');
const secondContainer = document.querySelector('.second-main-container');
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again');
const rating = document.getElementById('js-rate-number');
const rates = document.querySelectorAll('.btn')


submitButton.addEventListener("click", () => {
    secondContainer.classList.remove('hidden');
    mainContainer.style.display = 'none';
})

rateAgain.addEventListener("click", () => {
    secondContainer.classList.add('hidden');
    mainContainer.style.display = 'block';
})

// for (let i = 0; i < rates.length; i++) {
 
//     rates[i].addEventListener('click', () => {
//             rating.innerHTML = rates[i].innerHTML
//     })
// }


rates.forEach((button) => {
    button.addEventListener('click', () => {
        rating.innerText = button.innerText
    })
})
