let body = document.querySelector('body');
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');

burger.addEventListener('click', function() {
	burger.classList.toggle("_active");
	header.classList.toggle("_active");
	body.classList.toggle("lock");
})

let arrow=document.querySelectorAll('.arrow');
for(i=0; i<arrow.length; i++){
	let thisLink=arrow[i].parentElement;
	console.log(thisLink);

	let subMenu=arrow[i].parentElement.nextElementSibling.firstElementChild;
	console.log(subMenu);
	
	let thisArrow=arrow[i];
	console.log(thisArrow);

	thisLink.classList.add('parent');
	arrow[i].addEventListener('click', function(){
		subMenu.classList.toggle('open');
		thisArrow.classList.toggle('active');
		console.log("click");
		
	});
}

