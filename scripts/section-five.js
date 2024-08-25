import { formatCurrency } from '../money/formar-curency.js';
let offers = [{
    name:'basic',
    mass: '500kg',
    time: '1 weeks',
    priceCents: 99900,
    id: 1,
} , {
    name:'middle',
    mass: '1TON',
    time: '2weeks',
    priceCents : 199900,
    id: 2,
} , {
    name:'pro',
    mass: ' 2 TON',
    time: '1 month',
    priceCents : 299900,
    id: 3,
}];
let html = '';

offers.forEach((offer) => {
    document.querySelector('.section-five').innerHTML = '';
    html += ` <div class="offers">
            <h1 class="name">${offer.name}</h1>
            <h2 ><span>mass</span> : ${offer.mass}</h2>
            <h2><span>time</span>:${offer.time} </h2>
            <h2> <span>price</span>: $${formatCurrency(offer.priceCents)}</h2>
            <div class="button-cont"><button>order it</button></div>
            
        </div>`
})

document.querySelector('.section-five').innerHTML = html