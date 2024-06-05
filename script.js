let input = document.getElementById('input-box');
let listco = document.getElementById('list-container');

function addTask() {
    if (input.value === '') {
        alert('Write something, you freaking idiot!!');
    } else {
        let newX = document.createElement('li');
        newX.innerHTML = input.value;
        listco.appendChild(newX);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        newX.appendChild(span);
    }
    input.value = '';
    store();
}

listco.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        store();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        store();
    }
}, false);

function store() {
    localStorage.setItem('tasks', listco.innerHTML);
}

function display() {
    if (localStorage.getItem('tasks')) {
        listco.innerHTML = localStorage.getItem('tasks');
    }
}

display();
