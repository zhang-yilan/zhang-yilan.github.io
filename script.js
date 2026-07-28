const images = Array.from(document.querySelectorAll(".work img"));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

let startX = 0;
let endX = 0;


// open image
images.forEach((img, index) => {

  img.addEventListener("click", () => {

    currentIndex = index;
    openLightbox();

  });

});


function openLightbox() {

  lightboxImg.src = images[currentIndex].src;
  lightbox.classList.add("active");

}


function closeLightbox() {

  lightbox.classList.remove("active");

}


function showNext() {

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  lightboxImg.src = images[currentIndex].src;

}


function showPrev() {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  lightboxImg.src = images[currentIndex].src;

}



// click outside image closes
lightbox.addEventListener("click", (e) => {

  if (e.target === lightbox) {
    closeLightbox();
  }

});



// keyboard control
document.addEventListener("keydown", (e) => {

  if (!lightbox.classList.contains("active")) {
    return;
  }


  if (e.key === "Escape") {
    closeLightbox();
  }


  if (e.key === "ArrowRight") {
    showNext();
  }


  if (e.key === "ArrowLeft") {
    showPrev();
  }

});



// mobile swipe control

lightboxImg.addEventListener("touchstart", (e) => {

  startX = e.changedTouches[0].screenX;

});


lightboxImg.addEventListener("touchend", (e) => {

  endX = e.changedTouches[0].screenX;

  handleSwipe();

});


function handleSwipe() {

  let distance = endX - startX;


  if (distance > 50) {
    showPrev();
  }


  if (distance < -50) {
    showNext();
  }

}