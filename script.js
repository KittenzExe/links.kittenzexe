var w = window.innerWidth;
var h = window.innerHeight;

console.log(w)

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

root.style.setProperty('--height', h);
root.style.setProperty('--width', w);
console.log(root)

if (w < 920) {
    root.style.setProperty('--head2', '40px')
    root.style.setProperty('--mar', '10px')
    root.style.setProperty('--imgw', '30px')
} else {
    root.style.setProperty('--head2', '50px')
    root.style.setProperty('--mar', '5px')
    root.style.setProperty('--imgw', '40px')
}