const tabs = document.querySelectorAll(".tabs")
const place = document.querySelector(".destination-place")
const description = document.querySelector(".destination-desc")
const distance = document.querySelector(".destination-distance")
const travel = document.querySelector(".destination-travel")
const planetImg = document.querySelector(".image-destination")

class Tabs {
    constructor(element) {
        this.element = element

        this.element.addEventListener("click", el => {
            
            const button = tabs
            Array.from(button).forEach(button => {
                button.setAttribute("aria-selected",false)
            })
            element.setAttribute("aria-selected", false)
            this.tabClick(el)
        })     
    }

    tabClick() {
        const id = this.element.getAttribute("data-id")
        fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            console.log(id)
            const planet = data.destinations[id]
            planetImg.src = planet.images.png
            place.innerText = planet.name
            description.innerText = planet.description
            distance.textContent = planet.distance
            travel.innerText = planet.travel
        })
    }
}

Array.from(tabs).forEach(el => {
    new Tabs(el)
})
