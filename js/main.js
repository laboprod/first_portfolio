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

// Change language dynamic
// const langEl = document.querySelector('.langWrap');
// const link = document.querySelectorAll('a');
// const titleEl = document.getElementById('title');
// const homeEl = document.getElementById('homeEn');
// const aboutEl = document.getElementById('aboutEn');
// const workEl = document.getElementById('workEn');
// const contactEl = document.getElementById('contactEn');

// const about1El = document.getElementById('about1');
// const about2El = document.getElementById('about2');
// const presentationEl = document.getElementById('description');

// link.forEach((el) => {
// 	el.addEventListener('click', () => {
// 		langEl.querySelector('.active').classList.remove('active');
// 		el.classList.add('active');

// 		const attr = el.getAttribute('language');

// 		titleEl.textContent = data[attr].description;
// 		homeEl.textContent = data[attr].home;
// 		aboutEl.textContent = data[attr].about;
// 		workEl.textContent = data[attr].work;
// 		contactEl.textContent = data[attr].contact;

// 		about1El.textContent = data[attr].about1;
// 		about2El.textContent = data[attr].about2;
// 		presentationEl.textContent = data[attr].presentation;
// 	});
// });

// let data = {
// 	french: {
// 		description: 'Développeur Web Front End',
// 		home: 'accueil',
// 		about: 'à propos',
// 		work: 'mes projets',
// 		contact: 'me contacter',

// 		about1: 'A propos',
// 		about2: 'de moi',
// 		presentation: 'Bonjour et bienvenue',
// 	},

// 	english: {
// 		description: 'Front-End Web Developer',
// 		home: 'home',
// 		about: 'about',
// 		work: 'my projects',
// 		contact: 'contact me',

// 		about1: 'About',
// 		about2: 'me',
// 		presentation: "Hello ! I'm François.",
// 	},
// };

//Show on scroll
const ratio = 0.2;
const options = {
	root: null,
	rootmargin: '0px',
	threshold: ratio,
};

const handleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add('reveal-visible');
			observer.unobserve(entry.target);
		}
	});
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
	observer.observe(r);
});
