/* Toggle Menu */
hamburger.addEventListener('click', (event) => {
	// Defence from over clicking
	event.target.style.pointerEvents = 'none'
	setTimeout(()=> {
		event.target.style.pointerEvents = 'all'
	}, 300);

	// Open menu screen
	container.classList.toggle('opened');
});

/* Change screen */
const menuItems = menu.querySelectorAll('[data-screen-name]:not(.active)');
menuItems.forEach(menuItem => {
	menuItem.addEventListener('click', (event) => {
		// Close menu
		container.classList.remove('opened');
		
		// Show selected screen
		if(menu.querySelector('.active')) { menu.querySelector('.active').classList.remove('active') };
		event.target.classList.add('active');
		setTimeout(()=> {
			container.dataset.screen = event.target.dataset.screenName;
		}, 180);
	})
})