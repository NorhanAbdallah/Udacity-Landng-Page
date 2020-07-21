/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// NavBar Variables
const navUl = document.getElementById('navbar__list')
const navAttribute = document.querySelectorAll("[data-nav]")


// Scroll Button
const scrollBtn = document.getElementById("scroll-Btn")


// Active Class
const allSections = document.getElementsByTagName("section")
console.log(allSections)
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
    );
}

function scrollFunc(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        scrollBtn.style.display = "block"
    }else{
        scrollBtn.style.display ="none"
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
    for( let i=0 ; i < navAttribute.length ; i++ ){

        // Create Link and List Elements
        let navLink = document.createElement("a")
        let navLi = document.createElement("li")
        // Link atributes
        navLink.textContent= navAttribute[i].id
        navLink.setAttribute('href', `#${navAttribute[i].id}`)
        // Append Link and list
        navLi.appendChild(navLink)
        navUl.append(navLi)
    }


// Add class 'active' to section when near top of viewport

function activeClassOnScroll(){
    for( let i=0 ; i < navAttribute.length ; i++ ){
        var selectedSection = document.getElementById(navAttribute[i].id);
        if(isInViewport(selectedSection)){
            selectedSection.classList.add('w3-animate-left')
        } 
    }
}


// Scroll to anchor ID using scrollTO event


function scrollTopFunc(){
    document.body.scrollIntoView({behavior: 'smooth', block: 'start'})
}



window.onscroll= function()
{scrollFunc();
activeClassOnScroll(); 
};
/**
 * End Main Functions
 * Begin Events
 * 
*/




