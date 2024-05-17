// script.js

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    showSlides();
}

function showProductDetails(productName, productDescription) {
    let modal = document.getElementById("productModal");
    let modalTitle = document.getElementById("modalProductTitle");
    let modalDescription = document.getElementById("modalProductDescription");
    
    modalTitle.textContent = productName;
    modalDescription.textContent = productDescription;
    
    modal.style.display = "block";
}

let modal = document.getElementById("productModal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
