const card = document.querySelector('.card')
const rateButtons = document.querySelectorAll('.rate-btn')
const submitButton = document.querySelector('.btn')
let rate

rateButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        rateButtons.forEach((btn) => {
            btn.classList.remove('selected');
        })

        e.target.classList.add('selected');
        rate = button.innerText
        return rate
    })
})

submitButton.addEventListener('click', () => {
    card.innerHTML = ''

    card.innerHTML = `<div class="thanks-container">` + 
                        `<img src="images/thank-you-image.svg" alt="" class="thanks-image">` +
                        `<p class="feedback">You selected ${rate} of 5</p>` +
                        `<div class="text-container">` +
                            `<h1>Thank you!</h1>` +
                            `<p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>` +
                        `</div>` +
                    `</div>`
})