(function() {

	// section: examples
	var exBtn1,
		exBtn2,
		exBtn3,
		btnContainer,
		exampleContainer,
		btns;

	exBtn1 				= document.querySelector(".home-examples__btn--1");
	exBtn2 				= document.querySelector(".home-examples__btn--2");
	exBtn3 				= document.querySelector(".home-examples__btn--3");
	btnContainer 		= document.querySelector(".home-examples__btns");
	exampleContainer 	= document.querySelector(".home-examples__content");
	btns 				= [exBtn1, exBtn2, exBtn3];

	for (let btn of btns) {
		btn.addEventListener("click", (e) => {
			let num = Array.prototype.indexOf.call(btnContainer.children, e.target);
			let percentage = -100 * (num / 3);
			
			exampleContainer.style.transform = `translateX(${percentage}%)`;
		});
	}
	// end examples
})();