let btn = document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click", () => {
    let input = document.querySelector("input");
    if (input.value=== "") {
        alert("cannot add task!\nenter something!");
    } else {
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.innerText = input.value;
        span.innerText = "X";
        span.classList.add("span");
        li.appendChild(span);
        ul.appendChild(li);
        input.value = "";
        saveData();
    }
})

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}
function showData() {
    ul.innerHTML = localStorage.getItem("data");
}
showData();
showData();
