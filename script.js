function increment(){
	let p = document.querySelector("p");
	let num = parseInt(p.innerText);
	alert(num);
	p.innerText = num + 1;
}
