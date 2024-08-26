import { worksImages } from "./works-images.js";
let html = '';
worksImages.forEach((image) => {
    document.querySelector('.our-works').innerHTML = '';
    html += `
    <img class="images" src="${image.src}">
    
    `
})
document.querySelector('.our-works').innerHTML = html