
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
           // searchConfirm.src = QualityImage();
        }
    }
    slider.oninput = slide;
};

function upload(e){
    let file = e[0];
    //alert(vidPreview);
    allTheseThings.hidden = false;
    vidPreview.src = URL.createObjectURL(file)
    vidPreview.playbackRate = 1;//2.5;
    vidPreview.play();
    slider.value = 0;

}

function slide(){
    vidPreview.currentTime = vidPreview.duration * this.value/100;

    console.log(this.value)
    vidPreview.pause();

}

//data%3Aimage%2Fpng%

//https://www.google.com/searchbyimage?image_url=

//https://tineye.com/search/?pluginver=chrome-1.3.0&url=
const user_agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36'
const googleSearch = 'https://images.google.com/searchbyimage/';
const tinySearch = 'https://tineye.com/search/';
function Search(){
    UpdateScroll();

    const url = QualityImage();
    
    searchConfirm.hidden = false;
    corsWorkAround.hidden = false;
    searchConfirm.src = url;

//    SearchForm.action = 'https://www.google.com/searchbyimage/upload?output=embed'

  //  SearchFrame.src = 'https://www.google.com/searchbyimage?output=embed'


    
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
    console.log('loving him');
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
