var imgs = ["img1", "img2", "img3", "img4", "img5"];
var curImg = 0;

function next(){
    document.getElementById(imgs[curImg]).style.display = "none"
    if(curImg < 4)
        curImg = curImg + 1;
    else
        curImg = 0;
    document.getElementById(imgs[curImg]).style.display = "inline";
}

function previous(){
    document.getElementById(imgs[curImg]).style.display = "none"
    if(curImg > 0)
        curImg = curImg - 1;
    else
        curImg = 4;
    document.getElementById(imgs[curImg]).style.display = "inline";
}