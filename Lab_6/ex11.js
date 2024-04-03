function add(x, y){
    return x + y;
}
function printer(x, y, func){
    return add(x, y);
}

 let ans = printer(1, 3, add);
 console.log(ans);