let trash1 = document.querySelector(".tasks .tasks-box .task .i-one");
let trash2 = document.querySelector(".tasks .tasks-box .task .i-2");
let trash3 = document.querySelector(".tasks .tasks-box .task .i-3");
let trash5 = document.querySelector(".tasks .tasks-box .task .i-5");
let task1 = document.querySelectorAll(".tasks .tasks-box .task .task-one");
let task2 = document.querySelectorAll(".tasks .tasks-box .task .task-two");
let task3 = document.querySelectorAll(".tasks .tasks-box .task .task-three");
let task5 = document.querySelectorAll(".tasks .tasks-box .task .task-five");
let like = document.querySelector(".like");

trash1.addEventListener("click", completed1);
trash2.addEventListener("click", completed2);
trash3.addEventListener("click", completed3);
trash5.addEventListener("click", completed5);

function completed1() {
    task1.forEach((task) => {
        task.classList.add("text-decoration-line-through");
        task.classList.add("text-black-50");
    })
    trash1.classList.add("text-black-50");
}
function completed2() {
    task2.forEach((task) => {
        task.classList.add("text-decoration-line-through");
        task.classList.add("text-black-50");
    })
    trash2.classList.add("text-black-50");
}
function completed3() {
    task3.forEach((task) => {
        task.classList.add("text-decoration-line-through");
        task.classList.add("text-black-50");
    })
    trash3.classList.add("text-black-50");
}
function completed5() {
    task5.forEach((task) => {
        task.classList.add("text-decoration-line-through");
        task.classList.add("text-black-50");
    })
    trash5.classList.add("text-black-50");
}

like.addEventListener("click", () => {
    like.style.color = "red";
})