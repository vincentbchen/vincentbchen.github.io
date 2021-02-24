/*these codes are from w3school.com
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top*/


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
	if(document.body.scrollWidth>768) return;
	
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll",scrollFunction);
// function autohide() {
// 	if document.body.scrollTop <= 0 {
// 	    mybutton.style.display = "none";
// 	} else {
// 	    mybutton.style.display = "block";
// 	}
// }

