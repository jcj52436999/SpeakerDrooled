/*--------------------------------------
  set up code (you can ignore this part)
  --------------------------------------*/
paper.install(window);
paper.setup('myCanvas');
$('#myCanvas').height($(window).height());
var canvasHeight = view.size.height;
var canvasWidth = view.size.width;
/*------------------------------------------*/

//define makeCar function:
var makeCar = function ( x, y, colorBod, styleBod, scaleBodX, flipBodY ) {
    // colorBod = 'red';
    // sedan, putfslb


    var carBody = new Path.Rectangle({
        point: [0, 20],
        size: [100, 25],
        fillColor: colorBod
    });

    var carTop = new Path.Rectangle({
        point: [15, 0],
        size: [50, 25],
        fillColor: colorBod
    });

    var wheel1 = new Path.Circle({
        center: new Point(75, 45),
        radius: 12,
        fillColor: '#444'
    });

    var wheel2 = new Path.Circle({
        center: new Point(24, 45),
        radius: 12,
        fillColor: '#444'
    });


function onMouseDown(event) {
	console.log('You pressed the mouse!');
}

function onMouseDrag(event) {
	console.log('You dragged the mouse!');
}

function onMouseUp(event) {
	console.log('You released the mouse!');
}

    // Group all of the shapes into a single layer
    // (similar to how Photoshop and Illustrator work):
    var autoAssy = new Layer({   // autoAssy was layer
        children: [carTop, carBody, wheel1, wheel2],
        position: [ x, y ]  // ,
        // scale[scaleBod]
        // this.scale(scaleBod);
    });

    // this.scale(scaleBod);
    autoAssy.scale(scaleBodX, flipBodY);
    return autoAssy;  // layer;
};

//define moveCar function:
var moveCar = function (car, speed) {
    if (speed > 0)
        {
            car.position.x += speed;
            if (car.position.x > canvasWidth) {
                car.position.x = 0;
            }
        }
    else if (speed < 0)
        {
            // car.position.x += speed;
            if (car.position.x <= 0) {
                car.position.x = canvasWidth;
            }
            car.position.x += speed;
        }

    /* var carPosX = car.position.x;
    if (car.position.x > canvasWidth && speed > 0) {
        car.position.x = 0;}
       else if (carPosX <= 0 && speed < 0) {
        car.position.x = canvaswidth;
        car.position.x += speed;}
    else {car.position.x += speed;}
    */
};

//call makeCar function:
var car1 = makeCar( 0, 100, 'red', 'sedan', -.5, .5);
var car2 = makeCar( 0, 200, 'blue', 'sedan', -.75, .75);
var car3 = makeCar( 0, 300, 'green', 'sedan', 1.2, 1.2);
var car4 = makeCar( 0, 400, 'orange', 'sedan', 2, -2);
var put1 = makeCar(0, 450, 'yellow', 'putfslb', 2, 2);

// work but not needed at moment
// car1.scale(.5);
// car2.scale(.75);
// car3.scale(1.2);
// car4.scale(2);

view.onFrame = function (event) {
    // call moveCar function each 
    // time the frame draws:
    moveCar(car1, -1);
    moveCar(car2, -2);
    moveCar(car3, 4);
    moveCar(car4, 7);
    moveCar(put1, 8);

};