function navToggle() {
	document.getElementById("headerUl").classList.toggle("header__ul_active");
	document.getElementById("html").classList.toggle("_overflow");
}

new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	  },

	  scrollbar:{
		el: '.swiper-scrollbar',
		draggable: true,
	  },
	  
	  spaceBetween: 20,

});

/*const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });*/