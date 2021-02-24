// set up text to print, each item in array is new line
// https://css-tricks.com/snippets/css/typewriter-effect/


var aText = new Array(
"I DESIGN THE RIGHT SOLUTION", 
"FOR THE RIGHT OPPORTUNITY"
);
var iSpeed = 120; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + (iTextPos & 1 ? "_" : "");
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  } else {
  	setTimeout(() => {
  		destination.innerHTML = destination.innerHTML.substring(0, destination.innerHTML.length - 1);
  		setTimeout(() => {
	  		destination.innerHTML = destination.innerHTML + "_";
	  		setTimeout(() => {
		  		destination.innerHTML = destination.innerHTML.substring(0, destination.innerHTML.length - 1);
		  		setTimeout(() => {
			  		destination.innerHTML = destination.innerHTML + "_";
			  		setTimeout(() => {
				  		iIndex = 0; // start printing array at this posision
						iArrLength = aText[0].length; // the length of the text array
				  		iTextPos = 0; // initialise text position
						sContents = ''; // initialise contents variable
				  		typewriter();
				  	}, 500)
			  	}, 500)
		  	}, 500)
	  	}, 500)
  	}, 500)
  	
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();