"use strict"

document.addEventListener('click', documentClock);

function documentClock(e) {
	const targetItem = e.target;

	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
}