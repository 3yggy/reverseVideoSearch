window.onload = function() {
    let slider = document.getElementById('slider');
    let vidPreview = document.getElementById('vidPreview');
    let searchConfirm = document.getElementById('searchConfirm');
    let allTheseThings = document.getElementById('allTheseThings');
    let corsWorkAround = document.getElementById('corsWorkAround');

    vidPreview.onclick = function(){
        if(this.paused){
            this.play();
        }
        else{
            this.pause();
            UpdateScroll();
        }
    }
    slider.oninput = slide;
};
function upload(e){
    let file = e[0];
    allTheseThings.hidden = false;
    vidPreview.src = URL.createObjectURL(file)
    vidPreview.playbackRate = 1;
    vidPreview.play();
    slider.value = 0;
}
function slide(){
    vidPreview.currentTime = vidPreview.duration * this.value/100;
    vidPreview.pause();
}

function Search(){
    UpdateScroll();
    const url = QualityImage();
    searchConfirm.hidden = false;
    corsWorkAround.hidden = false;
    searchConfirm.src = url;
}
var lastWindow;
function CORSWindow(url){
    vidPreview.pause();
    if(lastWindow)
        lastWindow.close();
    lastWindow = window.open(url, "myWindow","popup", "width=400, height=200");
}
function LoveBaby(){
    if(lastWindow){
        lastWindow.focus();
        vidPreview.pause();
    }
}
function QualityImage(){
    const canvas = document.createElement("canvas");
    canvas.width = vidPreview.videoWidth;
    canvas.height = vidPreview.videoHeight;
    canvas.getContext('2d').drawImage(vidPreview, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL();
}
function UpdateScroll(){
    slider.value = vidPreview.currentTime / vidPreview.duration * 100;
}
