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
var makeCar = function () {
    var carBody = new Path.Rectangle({
        point: [0, 20],
        size: [100, 25],
        fillColor: 'hotpink'
    });

    var carTop = new Path.Rectangle({
        point: [25, 0],
        size: [50, 25],
        fillColor: 'hotpink'
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
        position: [0,150]
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
var car1 = makeCar();
var car2 = makeCar();

view.onFrame = function (event) {
    // call moveCar function each 
    // time the frame draws:
    moveCar(car1, 2);
    moveCar(car2, 6);
};