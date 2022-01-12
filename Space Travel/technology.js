const imageTech = document.getElementById("image-tech")
const buttonOne = document.getElementById("number-one")
const buttonTwo = document.getElementById("number-two")
const buttonThree = document.getElementById("number-three")
const techName = document.getElementById("tech-name")
const techDesc = document.getElementById("tech-desc")

const vehicle2 = document.querySelector(".tech2")

function launch1() {
    imageTech.src = "./assets/technology/image-launch-vehicle-landscape.jpg"

    buttonOne.setAttribute("aria-selected", true)
    buttonTwo.setAttribute("aria-selected", false)
    buttonThree.setAttribute("aria-selected", false)

    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            const launchVehicle = data.technology[0]

            techName.textContent = launchVehicle.name
            techDesc.textContent = launchVehicle.description
        })
}

function launch2() {
    imageTech.src = "./assets/technology/image-spaceport-landscape.jpg"

    buttonOne.setAttribute("aria-selected", false)
    buttonTwo.setAttribute("aria-selected", true)
    buttonThree.setAttribute("aria-selected", false)

    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            const spaceport = data.technology[1]

            techName.textContent = spaceport.name
            techDesc.textContent = spaceport.description
        })
}

function launch3() {
    imageTech.src = "./assets/technology/image-space-capsule-landscape.jpg"

    buttonOne.setAttribute("aria-selected", false)
    buttonTwo.setAttribute("aria-selected", false)
    buttonThree.setAttribute("aria-selected", true)

    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            const spaceCapsule = data.technology[2]

            techName.textContent = spaceCapsule.name
            techDesc.textContent = spaceCapsule.description
        })
}