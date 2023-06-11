const images = [
  "https://source.unsplash.com/random/?Wallpapers",
  "https://source.unsplash.com/random/?sky",
  "https://source.unsplash.com/random/?sunset",
  "https://source.unsplash.com/random/?mountain",
  "https://source.unsplash.com/random/?snow",
  "https://source.unsplash.com/random/?night",
  "https://source.unsplash.com/random/?paintings",
];

const pickedImgNumber = Math.floor(Math.random() * images.length);
const bgImage = document
document.body.style.backgroundImage = `url(${images[pickedImgNumber]})`
