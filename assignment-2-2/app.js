let m;
m = 11;
document.getElementById("blob").innerHTML = m;

let burgerking = "Whopper"; 
myFunction();
// I declared this variable as burgerking because I like Whoppers 
function myFunction() {
  document.getElementById("global").innerHTML = "I'd like to order a " + burgerking;
}

function myFunction2() {
  document.getElementById("help1").innerHTML = "Help";
  document.getElementById("help2").innerHTML = "I am confused on this assignment";
  document.getElementById("help3").innerHTML = "Am I close to getting this right?";
}
	//The blocked varible is inside the "{ }"

	let f = 125;
	let t = 82;
	let n = f - t;
	document.getElementById("math").innerHTML = n;

let question = "How are you today?";
let answer = 'Great! Thanks for asking.';
// Remember that the string variables are what go inside the "" or '' overall the message you trying to show up.
document.getElementById("hello").innerHTML =
question + "<br>" + answer;

const animals = ["shark", "polar bears", "giraffe"];


animals.push("snakes");
// pushing out the 4th animal onto the list displayed 

document.getElementById("zoo").innerHTML = animals; 