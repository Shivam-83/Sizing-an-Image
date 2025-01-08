let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");
let defaultImageWidth = 200;
let imageMaxWidth = 300;
let imageMinWidth = 100;
let maxWidthwarningMessage = "Too big. Decrese the size of the Image.";
let minWidthwarningMessage = "Can't Visible. Increase the size of the Image.";

imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

function onIncrement() {
    if (defaultImageWidth >= imageMaxWidth) {
        warningMessageElement.textContent = maxWidthwarningMessage;
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        let updatedImageWidth = defaultImageWidth + "px";
        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}

function onDecrement() {
    if (defaultImageWidth <= imageMinWidth) {
        warningMessageElement.textContent = minWidthwarningMessage;
    } else {
        defaultImageWidth = defaultImageWidth - 5;
        let updatedImageWidth = defaultImageWidth + "px";
        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}