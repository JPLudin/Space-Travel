const imageCrew = document.getElementById("image-crew")
const commanderDot = document.getElementById("commander-dot")
const specialistDot = document.getElementById("specialist-dot")
const pilotDot = document.getElementById("pilot-dot")
const engineerDot = document.getElementById("engineer-dot")
const crewRole = document.getElementById("crew-role")
const crewName = document.getElementById("crew-name")
const crewBio = document.getElementById("crew-bio")

function commander() {
    imageCrew.src = "./assets/crew/image-douglas-hurley.png"

    commanderDot.setAttribute("aria-selected", true)
    specialistDot.setAttribute("aria-selected", false)
    pilotDot.setAttribute("aria-selected", false)
    engineerDot.setAttribute("aria-selected", false)

    fetch("./data.json")        
        .then(response => response.json())
        .then(data => {
            const commander = data.crew[0]
            
            crewRole.innerText = commander.role
            crewName.innerText = commander.name
            crewBio.innerText = commander.bio
        })
}

function specialist() {
    imageCrew.src = "./assets/crew/image-mark-shuttleworth.png"

    commanderDot.setAttribute("aria-selected", false)
    specialistDot.setAttribute("aria-selected", true)
    pilotDot.setAttribute("aria-selected", false)
    engineerDot.setAttribute("aria-selected", false)

    fetch("./data.json")        
        .then(response => response.json())
        .then(data => {
            const specialist = data.crew[1]
            
            crewRole.innerText = specialist.role
            crewName.innerText = specialist.name
            crewBio.innerText = specialist.bio
        })
}

function pilot() {
    imageCrew.src = "./assets/crew/image-victor-glover.png"

    commanderDot.setAttribute("aria-selected", false)
    specialistDot.setAttribute("aria-selected", false)
    pilotDot.setAttribute("aria-selected", true)
    engineerDot.setAttribute("aria-selected", false)

    fetch("./data.json")        
        .then(response => response.json())
        .then(data => {
            const pilot = data.crew[2]
            
            crewRole.innerText = pilot.role
            crewName.innerText = pilot.name
            crewBio.innerText = pilot.bio
        })
}

function engineer() {
    imageCrew.src = "./assets/crew/image-anousheh-ansari.png"

    commanderDot.setAttribute("aria-selected", false)
    specialistDot.setAttribute("aria-selected", false)
    pilotDot.setAttribute("aria-selected", false)
    engineerDot.setAttribute("aria-selected", true)

    fetch("./data.json")        
        .then(response => response.json())
        .then(data => {
            const engineer = data.crew[3]
            
            crewRole.innerText = engineer.role
            crewName.innerText = engineer.name
            crewBio.innerText = engineer.bio
        })
}