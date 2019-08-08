var quotes = [

' "Think Differently" - Steve Jobs',
' "Who we are can not be seperated from where we are from" - Malclom Gladwell',
' "The magic number for true enterprise: ten thousand hours" - Malclom Gladwell',
' "Giants are not what we think they are. The same qualities that give them strenghths are often the sources of great weakness" - Malclom Gladwell',
' "I want to put a ding in the universe" - Steve Jobs',
' "Innovation distinguishes between a leader and a follower" - Steve Jobs'

]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('d').innerHTML = quotes[randomNumber];
}