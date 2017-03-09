//An array of arrays, collecting quotes and their authors in pairs.
var quotes = [
  ["So it is. we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it.", "Seneca"], 
  ["He who cannot obey himself will be commanded. Such is the nature of living things.","Nietzsche"], 
    ["To know what people really think, pay regard to what they do, rather than what they say.", "Descartes"],
    ["Misconceptions play a prominent role in my view of the world.", "George Soros"], 
    ["Talent hits a target no one else can hit. Genius hits a target no one else can see.", "Arthur Schopenhauer"], 
    ["There is no man who is lucky in all things.", "Pindar"], 
    ["Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.", "Francis Bacon"], 
    ["It takes a wise man to discover a wise man.", "Diogenes of Sinope"], 
    ["A happy life consists in the tranquility of mind.", "Cicero"], 
    ["To be ignorant of what happened before you were born is to remain forever a child.", "Cicero"],
    ["Fame and tranquility can never be bedfellows.", "Montaigne"],
    ["Every lover is a soldier.", "Ovid"],
    ["Laziness is a kind of sadness.", "Thomas Aquinas"],
    ["To love is to will the good of the other.", "Thomas Aquinas"],
    ["To become a philosopher, start by walking very slowly", "Nassim Nicholas Taleb"],
    ["There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "Aristotle"],
    ["90% of the functionality delivered now is better than 100% delivered never.", "Kernighan & Plauger"],
    ["There are only two kinds of languages: the ones people complain about and the ones nobody uses.", "Bjarne Stroustrup"],
    ["Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.", "David Leinweber"],
    ["I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.", "Bill Gates"],
    ["good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun.", "Linus Torvalds"],
];

var lastNo = 1;
var randomNo;
var thisQuote ="\""+"He who cannot obey himself will be commanded. Such is the nature of living things."+"\"";
vaqqqqqqqqqqqqr thisAuthor = "Nietzsche";
var randomFunction = function() {
  var randomNo = Math.floor(Math.random()*quotes.length);
  return randomNo;
};

$("document").ready(function() {
  //New Quote button functionality
$("#btn-qt").on("click", function(){
  randomNo = randomFunction();
  while(randomNo == lastNo) {
    randomNo = randomFunction();
  }
  $("#quote").html("&ldquo;"+quotes[randomNo][0]+"&rdquo;");
  $("#author").html(quotes[randomNo][1]);
  lastNo = randomNo;
  thisQuote = "\""+quotes[randomNo][0]+"\"";
  thisAuthor = quotes[randomNo][1];
});
  
  //Tweet button functionality
  $("#btn-twt").on("click", function() {
    var twthref = 'https://twitter.com/intent/tweet?text=' + thisQuote + " - " + thisAuthor;
    $("#twt-link").attr('href', twthref);
  });
});
