let images = [
    "/images/tictac.png",
    "/images/expanding.png",
]

let index = 0;

let screen = document.querySelector(".tv-img");
screen.innerHTML = `<img src="${images[Math.floor(Math.random() * images.length)]}" alt="tic-tac-toe">`;

function changeImage() {

    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    } 

}