// Typing Animation
var typed = new Typed(".typing", {
    strings: ["Artificial Intelligence", "Full Stack Development", "AWS", "Deep Learning"],
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

// Show or hide the button based on scroll position
window.onscroll = function() {
    var button = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

// Scroll to the top of the document
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}