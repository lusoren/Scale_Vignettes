var width, height, center;
var points = 3;
var smooth = true;

initWidth = view.size.width;

var moveCounter=1;
var addTracker=0;

console.log("started");


function initializePath(pathObject) {

	//var rgb= moveCounter % 255;
	//var color= "rgb(" + rgb + "," + rgb + "," + rgb + ")";
    
   var path = new Path({
        strokeWidth: 1
    });
    var lightness = (moveCounter % 300)/300 ;
	
    path.strokeColor = {hue: 0, saturation: 0, lightness: lightness};
    
	center = view.center;
	width = view.size.width;
	height = view.size.height / 2;
    
	path.segments = [];

    path.add(view.bounds.topLeft);
    
	for (var i = 1; i < points; i++) {
		var point = new Point(width / points * i, center.y);
		path.add(point);
	}
    
    path.add(view.bounds.bottomRight);
    
    var h = initWidth-view.size.width;
    
	for (var i = 1; i < points; i++) {
		var sinSeed = h + (i + i % 10) * 100;
		var sinHeight = Math.sin(sinSeed / 200) * height;
		var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
 
        path.segments[i].point.y = yPos;
	}
	if (smooth)
		path.smooth({ type: 'continuous' });
    
}

var bool= true;

function onResize(event) {
	
    if (bool==true) {
       moveCounter++;
	   
    } else {
        moveCounter--;
    }
    
    if (bool==255 || bool ==0) {
		console.log("YASS QUEEENN");
        bool= !bool;
    }
   
    initializePath();

}