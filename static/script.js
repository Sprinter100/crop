var cropper;

var image = document.getElementById('image');
var helper = document.getElementById('helper');

var posXVal = document.getElementsByClassName('posX-val')[0];
var posYVal = document.getElementsByClassName('posY-val')[0];
var widthVal = document.getElementsByClassName('width-val')[0];
var heightVal = document.getElementsByClassName('height-val')[0];
var rotateVal = document.getElementsByClassName('rotate-val')[0];
var scaleXVal = document.getElementsByClassName('scaleX-val')[0];
var scaleYVal = document.getElementsByClassName('scaleY-val')[0];

var getDataButton = document.getElementById('btn');

var fileInput = document.querySelector('.file-input>.input');

fileInput.addEventListener('change', function(event) {
    console.log(event.target.value);
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        clearCropper();
        image.src = event.target.result;
        initCropper();
    };

    if (file) {
        reader.readAsDataURL(file);
    }
})

var initCropper = function() {
    cropper = new Cropper(image, {
        viewMode: 1,
        aspectRatio: 1,
        preview: '#preview',
        guides: false,
        center: false,
        autoCropArea: 0.6,
        movable: 0,
        zoomable: 0,
        toggleDragModeOnDblclick: 0,
        minCropBoxWidth: 90,
        minCropBoxHeight: 90,
        crop: function(e) {
            posXVal.innerHTML = e.detail.x;
            posYVal.innerHTML = e.detail.y;
            widthVal.innerHTML = e.detail.width;
            heightVal.innerHTML = e.detail.height;
            rotateVal.innerHTML = e.detail.rotate;
            scaleXVal.innerHTML = e.detail.scaleX;
            scaleYVal.innerHTML = e.detail.scaleY;
        }
    });

    getDataButton.addEventListener('click', onGetDataBtnClick);
};

var clearCropper = function() {
    if (cropper) {
        cropper.destroy();

        getDataButton.removeEventListener('click', onGetDataBtnClick);
    }
}

var onGetDataBtnClick = function() {
    console.log(cropper.getData(true));
}