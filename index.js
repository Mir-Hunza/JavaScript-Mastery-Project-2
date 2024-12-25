let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let prevsrc = img.src;
let prevText = h2.innerText;

img.addEventListener("mouseover", () => {
    img.src = "https://cdn.pixabay.com/photo/2019/12/07/19/23/earth-hour-4679932_640.jpg";
    h2.innerText = "Pakistan";
    img.style.border = "2px solid yellow";
})

img.addEventListener("mouseleave", () => {
    img.src = prevsrc;
    h2.innerText = prevText;
    img.style.border = "2px solid blue";
});