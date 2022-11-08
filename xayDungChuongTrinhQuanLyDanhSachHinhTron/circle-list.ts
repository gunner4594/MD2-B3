class Circle {
    radius: number;
    color: string;
    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }
}
let circleList: Circle[] = [];
circleList.push(new Circle(10, 'green'));
circleList.push(new Circle(15, 'red'));
circleList.push(new Circle(20, 'yellow'));
function showCircle (circle: Circle) {
    console.log('Hình tròn này có màu: ' + circle.color + ' và bán kính: ' + circle.radius);
}
circleList.forEach(showCircle);
