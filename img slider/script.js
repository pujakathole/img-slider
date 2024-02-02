const main = document.querySelector('main');
const imageTitle = document.getElementById('imageTitle');
const photos = [
    'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

const titles = [
    "Fall Foliage Bliss",
    " Blue Butterflies",
    "Berries",
    "Lake Reflection",
    "Forest Landscape",
    "beauty of nature"
];

let currentImageIndex = 0;
let autoSlideInterval;

function updateImageAndTitle() {
    main.style.opacity = 0;

    setTimeout(() => {
        main.style.backgroundImage = `url('${photos[currentImageIndex]}')`;
        imageTitle.textContent = titles[currentImageIndex];
        main.style.opacity = 1;
    }, 500);
}

function Next() {
    currentImageIndex = (currentImageIndex + 1) % photos.length;
    updateImageAndTitle();
}

function Back() {
    currentImageIndex = (currentImageIndex - 1 + photos.length) % photos.length;
    updateImageAndTitle();
}

function toggleAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    } else {
        autoSlideInterval = setInterval(() => {
            Next();
        }, 2000);
    }
}

updateImageAndTitle();
