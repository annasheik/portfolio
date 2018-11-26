'use strict';

//togle hamburger menu button
function handleSideMenu() {
	$('.sidebarMenuInner').on('click', function() {
		$('input').prop("checked", false);
	})
}

//Nav menu links scroll

function handleAboutLink() {
	$('.about-link').on('click', function() {
		$('html, body').animate({
		scrollTop: $('#about').offset().top}, 700);
	})
}

function handleProjectsLink() {
	$('.projects-link').on('click', function() {
		$('html, body').animate({
		scrollTop: $('#projects').offset().top}, 700);
	})
}

function handleContactLink() {
	$('.contact-link').on('click', function() {
		$('html, body').animate({
		scrollTop: $('#contact-me').offset().top}, 700);
	})
}

//scroll down arrow
function handleScrollArrow() {
	$('.fa-angle-double-down').on('click', function() {
		$('html, body').animate({
		scrollTop: $('#about').offset().top}, 700);
	})
}

function setUpEventHandlers() {
	handleSideMenu();
	handleScrollArrow();
	handleAboutLink();
	handleProjectsLink();
	handleContactLink();
}

$(setUpEventHandlers);