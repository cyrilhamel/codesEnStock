let myDiv = document.getElementById("my-div");
//Detect touch device
function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

const move = (e) => {
    //try to aboîdany errors for touch screens
    try {
        var x = !isTouchDevice() ? e.pageX : e.touches [0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches [0].pageY;
    } catch (e) {}
    //Set left and top of div basd on mouse position
    myDiv.style.left = x - 160 + "px";
    myDiv.style.top = y - 160 + "px";
};

//for mouse
document.addEventListener("mousemove", (e) => {
    move(e);
});

//For touch
document.addEventListener("touchmove", (e) => {
    move(e);
});