const counter = document.getElementById("counter")

function loadCounter() {
    const elements = document.querySelectorAll(".new")
    counter.innerHTML = elements.length
}

loadCounter()

const mark = document.getElementById("mark")

mark.addEventListener("click", () => {
    const elements = document.querySelectorAll(".new")
    elements.forEach(el => el.classList.remove("new"))
    counter.innerHTML = 0
})


