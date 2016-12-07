var width, height, center;
var points = 3;
var smooth = true;

initWidth = view.size.width;

var moveCounter=1;
var addTracker=0;

console.log("started");


function initializePath(pathObject) {

     center = view.center;
	width = view.size.width;
	height = view.size.height / 2;
    
   var path = new Path({
        strokeWidth: 1,
        strokeColor: 'white'
    });
    
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
	
     path.smooth({ type: 'continuous' });
    
}

function onResize(event) {
	
    initializePath();

}