var checkTime;

//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log('init() called');
    
    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        }
    });
 
    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		prev();
    		setImage(index);
    		break;
    	case 38: //UP arrow
    		break;
    	case 39: //RIGHT arrow
    		next();
    		setImage(index);
    		break;
    	case 40: //DOWN arrow
    		startTime();
    		break;
    	case 13: //OK button
    		break;
    	case 10009: //RETURN button
		tizen.application.getCurrentApplication().exit();
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}
    });
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('divbutton1').innerHTML='Current time: ' + h + ':' + m + ':' + s;
    setTimeout(startTime, 10);
}
var index = 0;
function next() {
  index = (index+1) %2;
}

function prev() {
	index = (index-1) %2;
}

function setImage(src) {
	var path = "images/"+ src+ ".jpg";
	console.log(path);
	var artTag = document.getElementById('art');
	artTag.setAttribute("src",path);
}

function checkTime(i) {
    if (i < 10) {
        i='0' + i;
    }
    return i;
}
