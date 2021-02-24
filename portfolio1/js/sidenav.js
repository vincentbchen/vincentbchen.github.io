// hide/show topnav
var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
  // hideHeader();
  // scrollIndicator();
// };

// function hideHeader() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-115px";
//   }
//   prevScrollpos = currentScrollPos;
// }




// scroll indicator

// function scrollIndicator() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("Starbucks-Bar").style.width = scrolled + "%";
// }



	// reponsive header
  if(screen.width>1400) {
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
}




// open side nav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



// accordion in project

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }





// tabs in project








// function openPage(cityName,elmnt,color) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }
//   document.getElementById(cityName).style.display = "block";
//   elmnt.style.backgroundColor = color;

// }
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();





// function openPersona(cityName,elmnt,color) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent1");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink1");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }
//   document.getElementById(cityName).style.display = "block";
//   elmnt.style.backgroundColor = color;

// }
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen1").click();




// function openIA(cityName,elmnt,color) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent2");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink2");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }
//   document.getElementById(cityName).style.display = "block";
//   elmnt.style.backgroundColor = color;

// }
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen2").click();







// highlight active sidenav-starbucks

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('#starbucks-fixed-sidenav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#starbucks-fixed-sidenav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement) {
          if (refElement.position() && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('#starbucks-fixed-sidenav a').removeClass("active");
              currLink.addClass("active");
          }
          // else{
          //     currLink.removeClass("active");
          // }
        }
    });
}


var sidenav = document.getElementById("starbucks-fixed-sidenav");


function appear() {

  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    sidenav.style.opacity = "1";
  } else {
    sidenav.style.opacity = "0";
  }
}

window.addEventListener("scroll",appear);







var myVar;

function pageLoader() {
  myVar = setTimeout(showPage, 700);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}














