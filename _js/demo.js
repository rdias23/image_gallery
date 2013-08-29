var myChild;
var displacement = 0;

function init() {
	myChild = document.getElementById('child');
	console.log(myChild)

	var btnNext = document.getElementById('btn-next');
	var btnPrev = document.getElementById('btn-prev');

	btnNext.addEventListener('click', next);
	btnPrev.addEventListener('click', prev);

}

function next() {
	displacement = displacement + 300;
	myChild.style.webkitTransform = 'translateX(' + displacement + 'px)';

	alert(displacement);
}

function prev() {
	
	if (displacement > 0)
	{
	displacement = displacement - 300;
	myChild.style.webkitTransform = 'translateX(' + displacement + 'px)';
	}

}

init();
