let tank = document.getElementById("tank");
let boom = document.getElementById("boom");

let top_boom = parseInt(boom.style["top"]);
let left_boom = parseInt(boom.style["left"]);

function up_tank() {
    let top_tank = parseInt(tank.style["top"]);
    let left_tank = parseInt(tank.style["left"]);

    tank.style["top"] = top_tank - 19 +'px';
    top_tank = parseInt(tank.style["top"]);
    left_tank = parseInt(tank.style["left"]);

    if(top_tank == top_boom && left_tank == left_boom) {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175504/explosion.png')"
        tank.style.zIndex=1;
    }
}
function down_tank() {
    let top_tank = parseInt(tank.style["top"]);
    let left_tank = parseInt(tank.style["left"]);

    tank.style["top"] = top_tank + 19 +'px';
    top_tank = parseInt(tank.style["top"]);
    left_tank = parseInt(tank.style["left"]);

    if(top_tank == top_boom && left_tank == left_boom) {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175504/explosion.png')"
        tank.style.zIndex=1;
    }
}
function left_tank() {
    let top_tank = parseInt(tank.style["top"]);
    let left_tank = parseInt(tank.style["left"]);

    tank.style["left"] = left_tank - 19 + 'px';
    top_tank = parseInt(tank.style["top"]);
    left_tank = parseInt(tank.style["left"]);

    if(top_tank == top_boom && left_tank == left_boom) {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175504/explosion.png')"
        tank.style.zIndex=1;
    }
}
function right_tank() {
    let top_tank = parseInt(tank.style["top"]);
    let left_tank = parseInt(tank.style["left"]);

    tank.style["left"] = left_tank + 19 + 'px';
    top_tank = parseInt(tank.style["top"]);
    left_tank = parseInt(tank.style["left"]);

    if(top_tank == top_boom && left_tank == left_boom) {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175504/explosion.png')"
        tank.style.zIndex=1;
    }
}