// Typing Animation
var typed = new Typed(".typing", {
    strings: ["Machine Learning", "Deep Learning", "Web Development", "Competitive Coding"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

/* About Tabs */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qual-active')
        })
        target.classList.add('qual-active')

        tabs.forEach(tab => {
            tab.classList.remove('qual-active')
        })
        tab.classList.add('qual-active')

    })
});