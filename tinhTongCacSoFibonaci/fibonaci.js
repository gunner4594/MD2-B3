var a0 = 0;
var a1 = 1;
for (var i = 0; i < 5; i++) {
    console.log("".concat(a0));
    var tmp = a0;
    a0 = a1;
    a1 = a1 + tmp;
}
