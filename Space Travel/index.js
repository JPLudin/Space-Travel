const mobileNav = document.querySelector(".mobile-nav-toggle")
const mobileMenu = document.querySelector(".primary-navigation")



mobileNav.addEventListener("click", () => {
    const visibility = mobileMenu.getAttribute("data-visible")
    if(visibility === "false") {
        mobileMenu.setAttribute("data-visible", true)
        mobileNav.setAttribute("data-expanded", true)
    
    }
    else {
        mobileMenu.setAttribute("data-visible", false)
        mobileNav.setAttribute("data-expanded", false)
    }

})



