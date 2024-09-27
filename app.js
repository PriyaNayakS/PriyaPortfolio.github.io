const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


document.getElementById('cta').addEventListener('click', function() {
    var projectsSection = document.getElementById('projects-container1'); // Access the section
    if (projectsSection.style.display === 'none' || projectsSection.style.display === '') {
        projectsSection.style.display = 'block'; // Make section visible
        this.textContent = 'Hide Projects'; // Change button text to hide
		this.style.backgroundColor = 'crimson';
    } else {
        projectsSection.style.display = 'none'; // Hide section
        this.textContent = 'More Projects'; // Change button text back to show
    }
});



