/*--------------------------------------
  set up code (you can ignore this part)
  --------------------------------------*/
paper.install(window);
paper.setup('myCanvas');
$('#myCanvas').height($(window).height());
var canvasHeight = view.size.height;
var canvasWidth = view.size.width;
/*--------------------------------------*/

//define makeCar function:
var makeCar = function ( x, y, colorBod, styleBod, scaleBod ) {
    // colorBod = 'red';
    var carBody = new Path.Rectangle({
        point: [0, 20],
        size: [100, 25],
        fillColor: colorBod
    });

    var carTop = new Path.Rectangle({
        point: [25, 0],
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

    // Group all of the shapes into a single layer
    // (similar to how Photoshop and Illustrator work):
    var layer = new Layer({
        children: [carTop, carBody, wheel1, wheel2],
        position: [ x, y ]
    });
    return layer;
};

//define moveCar function:
var moveCar = function (car, speed) {
    car.position.x += speed;
    if (car.position.x > canvasWidth) {
        car.position.x = 0;
    }
};

//call makeCar function:
var car1 = makeCar( 0, 100, 'red', 0, 0);
var car2 = makeCar( 0, 200, 'blue', 0, 0);
var car3 = makeCar( 0, 300, 'green', 0, 0);
var car4 = makeCar( 0, 400, 'orange', 0, 0);

car1.scale(.5);
car2.scale(.75);
car3.scale(1.2);
car4.scale(2);

view.onFrame = function (event) {
    // call moveCar function each 
    // time the frame draws:
    moveCar(car1, 1);
    moveCar(car2, 2);
    moveCar(car3, 4);
    moveCar(car4, 7);
};