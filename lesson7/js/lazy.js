const imagesToLoad = document.querySelectorAll('img[data-src');

const loadImages = (image) =>{
image.setAttribute('src', image.getAttribute('data-src'));
image.onLoad = () => {image.removeAttribute('data-source');
};
};

if('IntersectionObserver' in window) {
const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target); 
            imgObserver.unobserve(item.target); 
        }
    });
}); 

imagesToLoad.forEach((img) =>{
    imgObserver.observe(img); 
}); 
}
else {
imagesToLoad.forEach((img)=>{
    loadImages(img); 
})
}
