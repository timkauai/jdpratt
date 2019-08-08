var people = [

'Steve Jobs',
'Malclom Gladwell',
'Tiger Woods',
'Micheal Phelps',
'Winston Churchill',
'Darwin',
'Martin Luther King jr.',
'Elon Musk',
'Abraham Lincoln',
'George Washington',
'Franklin D. Roosevelt',
'Freddie Mercury'

]

function newPerson() {
	var randomNumber = Math.floor(Math.random() * (people.length));
	document.getElementById('d').innerHTML = people[randomNumber];
}