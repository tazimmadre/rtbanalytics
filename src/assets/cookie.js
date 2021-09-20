function agree() {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-PCD73QH");
  localStorage.setItem("cookie-agree", true);
}

function disagree() {
  let alert = document.querySelector(".alert");
  alert.classList.remove("show");
  localStorage.setItem("cookie-agree", false);
}

window.onload = () => {
  if (localStorage.getItem("cookie-agree") != null) {
    let alert = document.querySelector(".alert");
    alert.classList.remove("show");
  } else if (localStorage.getItem("cookie-agree") == true) {
    agree();
  }
};
