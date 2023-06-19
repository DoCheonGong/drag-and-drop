let leftbox = document.querySelector("#left");
let rightbox = document.querySelector("#right");

let lists = document.querySelectorAll(".list");
let selected = null;
let selected2 = null;

for (let el of lists) {
    el.addEventListener("dragstart", function (e) {
        selected = e.target;
        selected2 = e.target.id;
    })

    rightbox.addEventListener("dragover", function (e) {
        e.preventDefault();
    })

    rightbox.addEventListener("drop", function () {
        rightbox.append(selected);
        startEffect(selected2);
    })

    leftbox.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
    leftbox.addEventListener("drop", function () {
        leftbox.append(selected);
        finishEffect(selected2);
    })
}

// function
let str;
function startEffect(id) {
    str = id.substr(4, 1);
    let pages = document.querySelector(".page" + str);
    pages.style.transform = "scale(1)";

    let wrapdiv = document.querySelectorAll(".wrap div");
    for (let i = 0; i < wrapdiv.length; i++) {
        if (wrapdiv[i].classList.contains("page" + str) == 1) {
            wrapdiv[i].classList.add("on");
        } else {
            wrapdiv[i].classList.remove("on");
        }
    }
}

function finishEffect(id) {
    str = id.substr(4, 1);
    let pages = document.querySelector(".page" + str);
    pages.style.transform = "scale(0)";
}
