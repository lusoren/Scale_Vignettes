var width, height, center;


var paths=[];
var pathCounter=0;


var second = {
    x: 0,
    y: 0
};


var moveCounter=0;
var addTracker=0;

console.log("started");

function addPath() {

    var path = new Path({
        strokeColor: 'white',
        strokeWidth: 2,
    });
    
    path.add(0,0);
    path.add(view.bounds.bottomRight);
    
}


//function initializePath() {
//    
//    var path= pathObject.path;
//    
//	center = view.center;
//	width = view.size.width;
//	height = view.size.height / 2;
//    
//	path.segments = [];
//
//    path.add(view.bounds.topLeft);
//    
//	for (var i = 1; i < points; i++) {
//		var point = new Point(pathObject.width / points * i, center.y);
//		path.add(point);
//	}
//    
//    path.add(pathObject.width,pathObject.height);
//    
//}
//function flex(pathObject, count) {
//    
//    var path= pathObject.path;
//	
//    pathHeight += (center.y - pathHeight) / 10;
//    h = pathObject.width-view.size.width;
//    
//	for (var i = 1; i < points; i++) {
//		var sinSeed = h + (i + i % 10) * 100;
//		var sinHeight = Math.sin(sinSeed / 200) * height;
//		var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
// 
//        path.segments[i].point.y = yPos;
//	}
//	if (smooth)
//		path.smooth({ type: 'continuous' });
//}

function onResize(event) {
	moveCounter++
    if ((moveCounter-addTracker)>5) {
        console.log("added");
        addTracker=moveCounter;
        addPath();
    }
    
}