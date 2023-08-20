var options = {
    strings: ["Be a new freelancer!"],
    typeSpeed: 40,
    startDelay: 1000,
    showCursor: false
};

var typed = new Typed('#head-text', options);

var name1 = document.querySelector('.name1');
var project = document.querySelector('.about-para');

window.onscroll = function() { 
     if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20 ) {

        name1.classList.add('about-name')
        project.classList.add('card-about')

    } 
    else {

        name1.classList.remove('about-name')
        project.classList.remove('card-about')
    }
};
