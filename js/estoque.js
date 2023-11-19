let paintGrid = () => {
    let items = document.querySelectorAll(".view-item");

    let count = 0;
    items.forEach(i => {
        if (i.style.display != "none") {
            i.style.backgroundColor = count++ % 2 ? "#75e0b2" : "#2cb86d";
        }
    });
};


let search = () => {
    let str = document.querySelector(".search-text").value.toLowerCase();
    let items = document.querySelectorAll(".view-item");
    
    items.forEach(x => {
        if (!x.querySelector("p:first-of-type").textContent.toLowerCase().includes(str)) {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    });

    paintGrid();
};


document.addEventListener("DOMContentLoaded", () => {
    paintGrid();

    const textInput = document.querySelector(".search-text");
    textInput.addEventListener("input", search);
});