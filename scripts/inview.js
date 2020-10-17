const observerOptions = {
	root: null,
	rootMargin: "0px",
	threshold: 0.5,
};

const inView = ({element, addClass}) => {
	let allDomItems = [];
	
	let observer = new IntersectionObserver((element) => {
	element.forEach((dom_item) => {
			if (dom_item.intersectionRatio > 0) {
				dom_item.target.classList.add(`${addClass}`);
			}
		});
	}, observerOptions);
	

	if(typeof element != 'object') {
		let dom_item = document.querySelectorAll(`.${element}`);
		dom_item.forEach((item) => {
			observer.observe(item);
		});
	} else {
		element.forEach(($el) => {
			allDomItems.push(document.querySelectorAll(`.${$el}`))
		})
		
		console.log(allDomItems)
		allDomItems.forEach((nodes) => {
			nodes.forEach((nodesitem) => {
				console.log(nodesitem)
				observer.observe(nodesitem);
			})
		})
	}
	
	

}

export { inView };