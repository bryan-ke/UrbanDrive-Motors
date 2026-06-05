// image slider template

const slides = document.querySelectorAll(".slide-images img");

let slideIndex = 0;

let intervalID = null;

document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide() {

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// image slider template end

// modal template

const logInModal = document.getElementById("nav-bar-modal").classList;

function activeModal() {
    logInModal.add("modalOn");
}

function deactModal() {
    logInModal.remove("modalOn");
}

// modal template end

// filter template

const naCardsList = document.querySelectorAll(".na-cards");

const filterListMenu = document.querySelectorAll(".filter-menu");

const cars = document.querySelectorAll(".cars");

function clearFilter() {
    naCardsList.forEach(naCards => {
        naCards.classList.remove("hide-filter");
    })
}

filterListMenu.forEach(menu => {
    menu.addEventListener("click", (takeAction) => {
        const link = takeAction.target.closest("a");
        if (!link) return;
        const [type, category] = link.id.split("-");

        cars.forEach(car => {
            const carType = car.classList.contains(type);
            const carCateg = car.classList.contains(category);

            if (carType && carCateg) {
                car.classList.remove("hide-filter");
            } else {
                car.classList.add("hide-filter");
            }
        })
    })
})

// filter template end