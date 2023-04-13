/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */

var prefix = window.location.pathname.substr(
  0,
  window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1
);
var config = {
  host: window.location.hostname,
  prefix: prefix,
  port: window.location.port,
  isSecure: window.location.protocol === "https:",
};
require.config({
  baseUrl:
    (config.isSecure ? "https://" : "http://") +
    config.host +
    (config.port ? ":" + config.port : "") +
    config.prefix +
    "resources",
});

require(["js/qlik"], function (qlik) {
  qlik.on("error", function (error) {
    $("#popupText").append(error.message + "<br>");
    $("#popup").fadeIn(1000);
  });
  $("#closePopup").click(function () {
    $("#popup").hide();
  });
  const button = document.getElementById("btn");
  const SideContent = document.getElementsByClassName("Sidebar");
  const Sidemenu = document.getElementById("sidebar");
  const mobSide = document.getElementsByClassName("Mobclass");
  const mobBtn = document.getElementById("mobileButton");
  const show = document.querySelectorAll(".showcase");
  const tabs = document.querySelectorAll(".tabs");
  const mode = document.getElementById("mode");
  const body = document.getElementById("body");
  const RightContainer = document.getElementById("Right-container");
  const cards = document.getElementsByClassName("cards");
  const header = document.getElementById("header");
  const table = document.getElementById("main-table");
  const dot = document.getElementsByClassName("dot");
  const chevron = document.getElementById("chevron");
  const mobchevron = document.getElementById("mobIcon");

  //getting windows width
  //when a window screen change the function will call
  var windowWidth = window.innerWidth;
  window.onresize = onload = () => {
    windowWidth = this.innerWidth;
    Sidebar(windowWidth);
  };
  Sidebar(windowWidth);
  function Sidebar(windowWidth) {
    if (windowWidth < 1000) {
      Sidemenu.style.height = "5%";
      Sidemenu.style.width = "100%";
      for (i = 0; i < mobSide.length; i++) {
        mobSide[i].style.display = "none";
      }
      for (i = 0; i < SideContent.length; i++) {
        SideContent[i].style.display = "block";
      }
      mobBtn.addEventListener("click", mobilescreen);
    } else {
      Sidemenu.style.width = "5%";
      Sidemenu.style.height = "100%";
      for (i = 0; i < SideContent.length; i++) {
        SideContent[i].style.display = "none";
      }
      for (i = 0; i < mobSide.length; i++) {
        mobSide[i].style.display = "block";
      }
      button.addEventListener("click", lapscreen);
    }
  }
  function mobilescreen() {
    if (Sidemenu.style.height === "5%") {
      Sidemenu.style.height = "100%";
      Sidemenu.style.transition = "1s  ease";

      for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("before");
      }
      for (i = 0; i < mobSide.length; i++) {
        mobSide[i].style.display = "block";
      }
      mobchevron.classList.remove("bx-chevron-down");
      mobchevron.classList.add("bx-chevron-up");
    } else {
      Sidemenu.style.height = "5%";
      for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("before");
      }
      for (i = 0; i < mobSide.length; i++) {
        mobSide[i].style.display = "none";
      }
      mobchevron.classList.remove("bx-chevron-up");
      mobchevron.classList.add("bx-chevron-down");
    }
  }
  function lapscreen() {
    if (Sidemenu.style.width === "5%") {
      Sidemenu.style.width = "20%";
      Sidemenu.style.transition = "1s  ease";

      for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("before");
      }
      for (i = 0; i < SideContent.length; i++) {
        SideContent[i].style.display = "block";
      }
      chevron.classList.add("bx-chevron-left");
      chevron.classList.remove("bx-chevron-right");
    } else {
      Sidemenu.style.width = "5%";
      for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("before");
      }
      for (i = 0; i < SideContent.length; i++) {
        SideContent[i].style.display = "none";
      }
      chevron.classList.add("bx-chevron-right");
      chevron.classList.remove("bx-chevron-left");
    }
  }

  // tabs
  tabs.forEach((t, i) => {
    show.forEach((s) => {
      s.id === "dashboard"
        ? (document.getElementById("dashboard").style.display = "flex") &&
          (document.getElementById("dashboard_icon").style.backgroundColor =
            "#3963AD") &&
          (document.getElementById("dashboard_icon").style.color = "#fff") &&
          (document.getElementById("dashboard_icon").style.borderRadius =
            "10px")
        : "";
    });
    t.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.add("disable");
        t.classList.remove("active");
      });
      show.forEach((s) => {
        s.classList.add("shownone");
        s.classList.remove("showdisplay");
      });
      t.classList.remove("disable");
      t.classList.add("active");
      show[i].classList.remove("shownone");
      show[i].classList.add("showdisplay");
    });
  });

  mode.addEventListener("click", () => {
    if (body.style.backgroundColor === "#f0f1f3") {
      body.style.backgroundColor = "black";
      RightContainer.style.backgroundColor = "black";
      RightContainer.style.color = "#fff";
      for (i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "black";
        cards[i].style.color = "#fff";
      }
      header.style.color = "#fff";
      table.style.backgroundColor = "black";
      table.style.color = "#fff";
      for (i = 0; i < dot.length; i++) {
        dot[i].style.backgroundColor = "#fff";
      }
      Sidemenu.style.backgroundColor = "black";
      Sidemenu.style.border = "1px solid #fff";
    } else {
      body.style.backgroundColor = "#f0f1f3";
      RightContainer.style.backgroundColor = "#fff";
      for (i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "#fff";
      }
      table.style.backgroundColor = "#fff";
      for (i = 0; i < dot.length; i++) {
        dot[i].style.backgroundColor = "#041737";
      }
      Sidemenu.style.backgroundColor = "#041737";
    }
  });

  //callbacks -- inserted here --

  //open apps -- inserted here --
  var app = qlik.openApp("3158d525-f15e-4afd-acdb-cb8a162e78ef", config);

  //get objects -- inserted here --

  app.getObject("card1", "uBCNQnw");
  app.getObject("card2", "uBCNQnw");
  app.getObject("card3", "uBCNQnw");
  app.getObject("linechart", "kjcmDFj");
  app.getObject("barchart", "kjcmDFj");
  app.getObject("table", "dXgjx");

  //create cubes and lists -- inserted here --
});
