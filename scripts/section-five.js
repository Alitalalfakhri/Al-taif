import { formatCurrency } from '../money/formar-curency.js';
import { offers } from './offers.js';
let html = '';

offers.forEach((offer) => {
    document.querySelector('.section-five').innerHTML = '';
    html += ` <div class="offers">
            <h1 class="name">${offer.name}</h1>
            <h2 ><span>الوزن</span> : ${offer.mass}</h2>
            <h2><span>المدة</span>:${offer.time} </h2>
            <h2> <span>السعر</span>: $${formatCurrency(offer.priceCents)}</h2>
            <div class="button-cont"><button class="buy-button"> اطلب العرض</button></div>
            
        </div>`
})

document.querySelector('.section-five').innerHTML = html
document.querySelectorAll('.buy-button').forEach((button) => {
    button.addEventListener('click' , () => {
        window.location.href = 'https://t.me/Web23Dev';
    })
})