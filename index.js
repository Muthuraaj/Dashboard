const button = document.getElementById("btn");
const SideContent = document.getElementsByClassName("Sidebar");
const Sidemenu = document.getElementById("sidebar");
const mobSide = document.getElementsByClassName("Mobclass");
const mobBtn = document.getElementById("mobileButton");
const show = document.querySelectorAll(".showcase");
const tabs = document.querySelectorAll(".tabs");

//getting windows width
var windowWidth;
//when a window screen change the function will call
window.onresize = onload = () => {
  windowWidth = this.innerWidth;
  Sidebar(windowWidth);
};
Sidebar();
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
    for (i = 0; i < mobSide.length; i++) {
      mobSide[i].style.display = "block";
    }
  } else {
    Sidemenu.style.height = "5%";
    for (i = 0; i < mobSide.length; i++) {
      mobSide[i].style.display = "none";
    }
  }
}
function lapscreen() {
  if (Sidemenu.style.width === "5%") {
    Sidemenu.style.width = "20%";
    for (i = 0; i < SideContent.length; i++) {
      SideContent[i].style.display = "block";
    }
  } else {
    Sidemenu.style.width = "5%";
    for (i = 0; i < SideContent.length; i++) {
      SideContent[i].style.display = "none";
    }
  }
}

// tabs
tabs.forEach((t, i) => {
  show.forEach((s) => {
    s.id === "dashboard"
      ? (document.getElementById("dashboard").style.display = "block") &&
        (document.getElementById("dashboard_icon").style.backgroundColor =
          "#3963AD") &&
        (document.getElementById("dashboard_icon").style.color = "#fff") &&
        (document.getElementById("dashboard_icon").style.borderRadius =
          "10px") &&
        (document.getElementById("dashboard_icon").style.display = "flex") &&
        (document.getElementById("dashboard_icon").style.alignItems =
          "center") &&
        (document.getElementById("dashboard_icon").style.justifyConter =
          "center") &&
        (document.getElementById("dashboard_icon").style.paddingLeft = "5px") &&
        (document.getElementById("dashboard_icon").style.paddingRight = "5px")
      : "";
  });
  t.addEventListener("click", () => {
    tabs.forEach((t) => {
      // t.style.width = "100%";
      t.style.backgroundColor = "transparent";
      t.style.color = "#7DA0CB";
      t.style.display = "flex";
      t.style.alignItems = "center";
      t.style.justifyContent = "start";
    });
    show.forEach((s) => {
      s.style.display = "none";
    });
    t.style.color = "#fff";
    t.style.backgroundColor = "#3963AD";
    t.style.borderRadius = "10px";
    t.style.display = "flex";
    t.style.alignItems = "center";
    t.style.justifyContent = "center";
    t.style.paddingLeft = "5px";
    t.style.paddingRight = "5px";

    // t.style.backgroundColor = "#ea7e54";
    show[i].style.display = "block";
    // console.log(t);
  });
});
