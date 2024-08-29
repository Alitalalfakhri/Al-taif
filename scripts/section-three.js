import { worksImages } from "./works-images.js";

let html = '';
worksImages.forEach((image) => {
    html += `
    <img class="images" src="${image.src}" alt="صور اعمال الشركة" style="cursor: pointer;">
    `;
});

document.querySelector('.our-works').innerHTML = html;

// Add click event listener to images
const images = document.querySelectorAll('.images');

images.forEach(img => {
    img.addEventListener('click', function() {
        // Redirect to detail page with image URL as a query parameter
        const imageUrl = encodeURIComponent(this.src);
        window.location.href = `images.html?image=${imageUrl}`;
    });
});