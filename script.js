const hamburger = document.querySelector(".mobile-sidebar-nav-features")
const navMenu = document.querySelector(".nav-features")
const mainContainer = document.querySelector(".container")
const itemHome = document.querySelector(".item-home")
const itemAbout = document.querySelector(".item-about")
const itemProjects = document.querySelector(".item-project")
const itemContact = document.querySelector(".item-contact")
const content = document.querySelector(".home-content")
const aboutContent = document.querySelector(".about-content")
const avatarImg = document.querySelector(".home-image")
const aboutImg = document.querySelector(".about-img")
const skillsList = document.querySelector(".skill-list-container")
const animatedText = document.querySelector(".user-specialized")
const educationIcon = document.querySelector(".education-icon")
const workIcon = document.querySelector(".work-icon") 
const timeLineContainer = document.querySelector(".timeLine-container")
const workTimeLine = document.querySelector(".work-timeLine")
const gmail = document.querySelector(".gmail")
const linkedIn = document.querySelector(".linkedIn")
const github = document.querySelector(".github")
const whatsapp = document.querySelector(".whatsapp")

// hamburger-effect
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    mainContainer.classList.toggle("active");
})

itemHome.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    mainContainer.classList.remove("active");
})

itemAbout.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    mainContainer.classList.remove("active");
})

itemContact.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    mainContainer.classList.remove("active");
})

itemProjects.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    mainContainer.classList.remove("active");
})

// scroll-animation-function
const observer = new IntersectionObserver(
    entries => {
        console.log(entries)
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            if(entry.isIntersecting){
                observer.unobserve(entry.target)
            }
        })
    }, 
    {
        threshold: 0.5,
    }
)

observer.observe(content)
observer.observe(avatarImg)
observer.observe(aboutContent)
observer.observe(aboutImg)
observer.observe(skillsList)
observer.observe(gmail)
observer.observe(linkedIn)
observer.observe(github)
observer.observe(whatsapp)

// animation-text-effect
const textLoad = () => {
    setTimeout(() => {
        animatedText.textContent = 'Full Stack Web Developer';
    }, 0);
    setTimeout(() => {
        animatedText.textContent = 'Frontend Developer';
    }, 4000);
    setTimeout(() => {
        animatedText.textContent = 'Backend Developer';
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);

// qualifications displayer

educationIcon.addEventListener("click", () => {
    educationIcon.classList.add("active-icon")
    educationIcon.classList.remove("in-active-icon")
    timeLineContainer.style.display = "flex"
    workIcon.classList.remove("active-icon")
    workIcon.classList.add("in-active-icon")
    workTimeLine.style.display = "none"
})

workIcon.addEventListener("click", () => {
    educationIcon.classList.remove("active-icon")
    educationIcon.classList.add("in-active-icon")
    timeLineContainer.style.display = "none"
    workIcon.classList.add("active-icon")
    workIcon.classList.remove("in-active-icon")
    workTimeLine.style.display = "flex" 
})