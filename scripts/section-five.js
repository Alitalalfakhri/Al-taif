import { offers } from "./offers.js";

let html = '';

offers.forEach((offer) => {
    let sizesHtml = '';
    for (let i = 0; i < offer.sizes.length; i++) {
        sizesHtml += `
            <div class="size-box" onclick="window.location = 'https://wa.me/+9647770641171?text=${offer.name}/ ${offer.prices[i]}/ (${offer.sizes[i]}) اريد هذا العرض';">
                <h2>${offer.sizes[i]} :القياسات</h2>
                <h3>${offer.prices[i].toLocaleString()} :السعر</h3>
            </div>
        `;
    }

    html += `
        <div class="card">
            <h2 class="offer-name">${offer.name}</h2>
            <h2>علاكة لون واحد 1000</h2>
            <img class="image" src="${offer.Image}" alt="${offer.name}">
            <div class="sizes">
                ${sizesHtml}
            </div>
        </div>
    `;
});

// Ensure the DOM is loaded before querying elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.offers-cont').innerHTML = html;

    document.querySelectorAll('.image').forEach((img) => {
        img.addEventListener('click' , function(){
            const imageUrl = encodeURIComponent(this.src);
            window.location.href = `images.html?image=${imageUrl}`;
        })
      
    });
});
