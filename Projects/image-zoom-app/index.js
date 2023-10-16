let imagesId = document.querySelectorAll('img');
let image = null; // Initialize image variable to null

imagesId.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        console.log('###', e.target.id);
        image = e.target.id; // Store the image element itself
    });
});
setTimeout(()=>{
    var holder = document.querySelector('.image-holder');
    var previewHolder = document.querySelector('.image-preview');
    var imagePreview = document.getElementById('image-preview');


    holder.addEventListener('mousemove', (event) => {
        if (image && imagePreview) { // Check if both image and imagePreview are not null
            var magGlass = document.querySelector('.magnifying-glass');
            let left = event.clientX - holder.offsetLeft;
            let top = event.clientY - holder.offsetTop;
            let height = image.clientHeight;
            let width = image.clientWidth;
            let previewWidth = imagePreview.clientWidth;
            let scaleValue = 2500 / previewWidth;
            imagePreview.style.transform = 'scale(' + scaleValue + ')';
            let magTop = top - 50;
            let magLeft = left - 50;
            if (magTop <= 0) {
                magTop = 0;
            }
            if (magLeft <= 0) {
                magLeft = 0;
            }
            if (magLeft >= (width - 100)) {
                magLeft = width - 100;
            }
            if (magTop >= (height - 100)) {
                magTop = height - 100;
            }
            magGlass.style.top = magTop + 'px';
            magGlass.style.left = magLeft + 'px';
            let topPercentage = top / height * 100;
            let leftPercentage = left / width * 100;
            imagePreview.style.top = - (5 * magTop) + "px";
            imagePreview.style.left = - (5 * magLeft) + "px";
        }
    });
    
    
    holder.addEventListener('mouseenter', () => {
        if (image) {
            previewHolder.classList.remove('d-none');
            let magGlass = document.createElement("DIV");
            magGlass.className = 'magnifying-glass';
            holder.appendChild(magGlass);
        }
    });
    
    holder.addEventListener('mouseleave', () => {
        if (image) {
            var magGlass = holder.querySelector('.magnifying-glass');
            previewHolder.classList.add('d-none');
            magGlass.parentNode.removeChild(magGlass);
            imagePreview.style.top = 0;
            imagePreview.style.left = 0;
            image = null; // Reset the image variable when leaving the holder
        }
    });
    
})


