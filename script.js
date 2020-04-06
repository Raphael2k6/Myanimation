var circle = document.querySelector("#circle");
var xPos = 0;

function animate() {
    xPos ++;
    circle.style.transform = `translate3d(${xPos}px, 0, 0)`;
    if (Math.abs(xPos) >= 900) {
        xPos = -900;
    }
    requestAnimationFrame(animate);
}
animate();