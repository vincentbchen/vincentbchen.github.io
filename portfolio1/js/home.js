var homebtn = document.getElementById("homebutton");


function gohome() {

  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    homebtn.style.opacity = "1";
  } else {
    homebtn.style.opacity = "0";
  }
}

window.addEventListener("scroll",gohome);