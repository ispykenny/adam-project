import { inView } from './inview';



/*
 --- element {array || string} ----
// target element you want to check for
 --- addClass ---
// class that gets added when element is in view
*/
inView({
	element: ['facts__image', 'facts__copy', 'facts__hr'],
	addClass: 'in-view'
})