// JavaScript Document


// elementen opgehaald die ik wil animeren 
const allAnimationItems = document.querySelectorAll("section")

const options = {
    rootMargin: "20px",
    threshold: 0.10
}

function callbackFunction(entries) {
    entries.forEach(entry => {
        // check of het element in beeld is
        if (entry.intersectionRatio > 0) {
          //voeg de class toe wanneer deze in beeld is
            entry.target.classList.add('fade')   
        }
        else {
            entry.target.classList.remove('fade')  
        }
    })
}

const observer = new IntersectionObserver(callbackFunction, options)

allAnimationItems.forEach(item => {
    //observeer het element
    observer.observe(item)
})