// var textWrapper = document.querySelector('.ml6 .letters');
// console.log('text : ', textWrapper);
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: true })
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml6',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});

let mybutton = document.getElementById("scrollbtn");

let navBar = document.querySelector(".navbar");

window.onscroll = () => {
  // console.log('scroll', navBar)
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    navBar.classList.add("bg-black");
  } else {
    mybutton.style.display = "none";
    navBar.classList.remove("bg-black");
  }
};

mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; //for chrome,firefox,edge,opera
  // console.log('hello')
});

function topfunction() {
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; //for chrome,firefox,edge,opera
}

(function () {
  "use strict";

  var cookieAlert = document.querySelector(".cookiealert");
  var acceptCookies = document.querySelector(".acceptcookies");

  if (!cookieAlert) {
    return;
  }

  cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

  // Show the alert if we cant find the "acceptCookies" cookie
  if (!getCookie("acceptCookies")) {
    cookieAlert.classList.add("show");
  }

  // When clicking on the agree button, create a 1 year
  // cookie to remember user's choice and close the banner
  acceptCookies.addEventListener("click", function () {
    setCookie("acceptCookies", true, 365);
    cookieAlert.classList.remove("show");

    // dispatch the accept event
    window.dispatchEvent(new Event("cookieAlertAccept"));
  });

  // Cookie functions from w3schools
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
})();