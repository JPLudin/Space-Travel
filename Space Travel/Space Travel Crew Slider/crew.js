/* function Slider(slider) {
    if(!(slider instanceof Element)) {
        throw new Error('No Slider passed in')
    }

    // create some variables for working with the slider
    let current
    let prev
    let next
    // select the elements needed for the slider
    const slides = slider.querySelector('.slides')
    const prevButton = slider.querySelector('.prev')
    const nextButton = slider.querySelector('.next')
     
    
    function startSlider() {
        current = slider.querySelector('.current') || slider.firstElementChild
        prev = current.previousElementSibling || slides.lastElementChild 
        next = current.nextElementSibling || slides.lastElementChild
    }

    function applyClasses() {
        current.classList.add('current')
        prev.classList.add('prev')
        next.classList.add('next')
    }

    function move(direction) {
        //first strip all the classes off the current slide
        const classesToRemove =['prev', 'current', 'next']
        prev.classList.remove(...classesToRemove)
        current.classList.remove(...classesToRemove)
        next.classList.remove(...classesToRemove)
        if(direction === 'back') {
            // make an new array of the new values, and structure them over and into
            //the prev, current and next variables
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current ]
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild]
        }
        applyClasses()
    }

    // When this slider is created, run the start slider function

    startSlider()
    applyClasses()

    // Event Listener
    prevButton.addEventListener('click', () => move('back'))
    nextButton.addEventListener('click', () => move())
}

const mySlider = Slider(document.querySelector('.slider'))
const dogSlider = Slider(document.querySelector('.dog-slider'))

Slider()

*/

function Slider(slider) {
    if(!(slider instanceof Element)) {
        throw new Error('No Slider passed')
    }

    let current

    const slidesContainer = slider.querySelector('.slides')
    const buttons = slider.querySelector('.dot-indicators')
    const slides = Array.from(slidesContainer.querySelectorAll('.slide')) 

    function handleClick(e) {    
        
        const slideId =e.target.getAttribute('data-id')
        const buttonAttribute = document.querySelectorAll('.dot')
        buttonAttribute.forEach(button => button.setAttribute('aria-selected', false))

        let crewImage = document.querySelector('.crew__image')
        let crewRole = document.querySelector('.crew__role')
        let crewName = document.querySelector('.crew__name')
        let crewBio = document.querySelector('.crew__bio')

        fetch("./data.json")        
            .then(response => response.json())
            .then(data => {
                const crew = data.crew
                Object.entries(crew).forEach(member => {
                    if(member.includes(slideId)) {
                        crewImage.src = member[1].images.png
                        crewRole.textContent = member[1].role
                        crewName.textContent = member[1].name
                        crewBio.textContent = member[1].bio    
                    }
                }) 
                e.target.setAttribute('aria-selected', true)               
        })

        // Diese Version ist als Slider gedacht als Variante, hier werden dann im HTML mehrere Blöcke gesetzt
        /* slides.forEach(slide => {
    
            if(slide.dataset.id === slideId) { 
                current = slider.querySelector('.current') 
                current.classList.remove('current')                
                
                slide.classList.add('current')
                current = slide.setAttribute('data-id', slide.dataset.id)

                e.target.setAttribute('aria-selected', true)          
            }
        }) */
    }

    buttons.addEventListener('click', handleClick)

}

const mySlider = Slider(document.querySelector('.slider'))





