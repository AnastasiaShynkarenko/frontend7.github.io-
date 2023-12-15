export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// function addImage() {
//   const link = document.getElementById('link');
//   const imageWrapper = document.createElement('div');
//   imageWrapper.classList.add("image-wrapper");
//   const newImage = document.createElement('img');
//   newImage.src = 'https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Chernivtsi-3.jpg';
//   newImage.classList.add("cityImage");
//   imageWrapper.appendChild(newImage);
//   link.appendChild(imageWrapper);
//   currentScale = 1;
// }

// function zoomIn() {
//   const imagesList = document.querySelectorAll('.cityImage');
//   if (imagesList.length) {
//     const lastImage = imagesList[imagesList.length - 1];
//     currentScale *= 1.2;
//     lastImage.style.transform = `scale(${currentScale})`;
//   }
// }

// function zoomOut() {
//   const imagesList = document.querySelectorAll('.cityImage');
//   if (imagesList.length) {
//     const lastImage = imagesList[imagesList.length - 1];
//     currentScale /= 1.2;
//     lastImage.style.transform = `scale(${currentScale})`;
//   }
// }

// function deleteImage() {
//   const imagesList = document.querySelectorAll('.cityImage');
//   if (imagesList.length) {
//     const lastImage = imagesList[imagesList.length - 1];
//     lastImage.parentNode.removeChild(lastImage);
//     currentScale = 1;
//   }
// }
