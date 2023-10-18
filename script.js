var h = 38;
var w = 0;
var alreadyStarted;
var count = 0;
var speed1 = 3;
function start() {
    alreadyStarted = true;
    document.getElementById("start").classList.add("visibility");
    document.getElementById("road").style.animation = "roadAnime 50s infinite linear";
    document.getElementById("enemyCar1").style.animation = "enemyCar1 infinite linear 3s";
    document.getElementById("enemyCar2").style.animation = "enemyCar2 infinite linear 5s";
    document.getElementById("enemyCar3").style.animation = "enemyCar3 infinite linear 4s";
    document.getElementById("enemyCar4").style.animation = "enemyCar4 infinite linear 6s";

}
function up() {
    h -= 1;
    document.getElementById("myCar").style.top = h + 'vh';
}
function down() {
    h += 1;
    document.getElementById("myCar").style.top = h + 'vh';
}
function left() {
    if (w > -5) {
        w -= 1;
        document.getElementById("myCar").style.left = w + 'vw';
    }
}
function right() {
    if (w < 5) {
        w += 1;
        document.getElementById("myCar").style.left = w + 'vw';
    }
}

var enemyCar1_left = document.getElementById("enemyCar1").getBoundingClientRect().left;
var enemyCar1_right = document.getElementById("enemyCar1").getBoundingClientRect().right;
var enemyCar1_up = document.getElementById("enemyCar1").getBoundingClientRect().up;
var enemyCar1_down = document.getElementById("enemyCar1").getBoundingClientRect().down;

var enemyCar2_left = document.getElementById("enemyCar2").getBoundingClientRect().left;
var enemyCar2_right = document.getElementById("enemyCar2").getBoundingClientRect().right;
var enemyCar2_up = document.getElementById("enemyCar2").getBoundingClientRect().up;
var enemyCar2_down = document.getElementById("enemyCar2").getBoundingClientRect().down;

var enemyCar3_left = document.getElementById("enemyCar3").getBoundingClientRect().left;
var enemyCar3_right = document.getElementById("enemyCar3").getBoundingClientRect().right;
var enemyCar3_up = document.getElementById("enemyCar3").getBoundingClientRect().up;
var enemyCar3_down = document.getElementById("enemyCar3").getBoundingClientRect().down;

var enemyCar4_left = document.getElementById("enemyCar4").getBoundingClientRect().left;
var enemyCar4_right = document.getElementById("enemyCar4").getBoundingClientRect().right;
var enemyCar4_up = document.getElementById("enemyCar4").getBoundingClientRect().up;
var enemyCar4_down = document.getElementById("enemyCar4").getBoundingClientRect().down;

var myCar_left = document.getElementById("myCar").getBoundingClientRect().left;
var myCar_right = document.getElementById("myCar").getBoundingClientRect().right;
var myCar_up = document.getElementById("myCar").getBoundingClientRect().up;
var myCar_down = document.getElementById("myCar").getBoundingClientRect().down;


document.getElementById("enemyCar1").addEventListener('animationiteration', () => { count++; });
document.getElementById("enemyCar2").addEventListener('animationiteration', () => { count++; });
document.getElementById("enemyCar3").addEventListener('animationiteration', () => { count++; });
document.getElementById("enemyCar4").addEventListener('animationiteration', () => { count++; });

document.addEventListener("click", function () {
    if (alreadyStarted == true) {
        document.addEventListener("keydown", e => { if (e.key == 'ArrowUp') { up(); } })
        document.addEventListener("keydown", e => { if (e.key == 'ArrowLeft') { left(); } })
        document.addEventListener("keydown", e => { if (e.key == 'ArrowDown') { down(); e.preventDefault(); } })
        document.addEventListener("keydown", e => { if (e.key == 'ArrowRight') { right(); } })
    }
})
setInterval(function () {
    document.getElementById("score").innerHTML = 'Score : ' + count;
}, 100);
