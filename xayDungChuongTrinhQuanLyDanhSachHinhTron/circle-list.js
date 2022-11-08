var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle(10, 'green'));
circleList.push(new Circle(15, 'red'));
circleList.push(new Circle(20, 'yellow'));
function showCircle(circle) {
    console.log('Hình tròn này có màu: ' + circle.color + ' và bán kính: ' + circle.radius);
}
circleList.forEach(showCircle);
