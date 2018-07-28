var third = document.getElementsByClassName('third')
var text = document.getElementsByClassName('title');
//console.log(text)

for(let i = 0; i < third.length; i++){
	console.log(third[i])
	third[i].addEventListener('click', function(){
		console.log(text[i])
		text[i].innerHTML = 'magic.' //or switch statement (for individual selection)
	})
}