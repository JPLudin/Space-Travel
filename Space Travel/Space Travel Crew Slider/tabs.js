/* const tabs = document.querySelectorAll(".tabs")
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
 */

const tabs = document.querySelector('.tab-list')
const buttons = tabs.querySelectorAll('[role="tab"]')
const tabInfo = document.querySelector('.destination-info')

function handleButtonClick(event) {
    
    //alle Tabs verstecken
    tabInfo.hidden = true
    //alle Tabs deselektierenr
    buttons.forEach(button => {
        button.setAttribute('aria-selected', false)
    })

    //das ausgewählte Tab selektieren

    event.currentTarget.setAttribute('aria-selected', true)

    //passende Beschreibung dazu ergänzen
    
    const idAttribute = event.currentTarget.getAttribute('data-id')

    fetch("./data.json")
        .then(response => response.json())
        .then(data => {

            const place = document.querySelector(".destination-place")
            const description = document.querySelector(".destination-desc")
            const distance = document.querySelector(".destination-distance")
            const travel = document.querySelector(".destination-travel")
            const planetImg = document.querySelector(".image-destination")
            const planet = data.destinations
            planet.forEach(planet => {
                const planetId = planet.id
                if(idAttribute === planetId) {
                    planetImg.src = planet.images.png
                    place.textContent = planet.name
                    description.textContent = planet.description
                    distance.textContent = planet.distance
                    travel.textContent = planet.travel
                }
                tabInfo.hidden = false
            })
        })
}

buttons.forEach(button => button.addEventListener('click', handleButtonClick))