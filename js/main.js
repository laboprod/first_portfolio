const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

const navLinks = document.querySelectorAll('.nav-link');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));

		// Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		showMenu = false;
	}
}

navLinks.forEach((item) => item.addEventListener('click', closeMenu));

function closeMenu() {
	menuBtn.classList.remove('close');
	menu.classList.remove('show');
	menuNav.classList.remove('show');
	menuBranding.classList.remove('show');
	navItems.forEach((item) => item.classList.remove('show'));

	showMenu = false;
}

//Show on scroll
const ratio = 0.2;
const options = {
	root: null,
	rootmargin: '0px',
	threshold: ratio,
};

const handleIntersect = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add('reveal-visible');
			observer.unobserve(entry.target);
		}
	});
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach((r) => {
	observer.observe(r);
});
