// // Sidebar coding

// // variables selection
const button = document.getElementById("btn");
const SideContent = document.getElementsByClassName("Sidebar");
const Sidemenu = document.getElementById("sidebar");
const mobSide = document.getElementsByClassName("Mobclass");
const mobBtn = document.getElementById("mobileButton");
const show = document.querySelectorAll(".showcase");
const tabs = document.querySelectorAll(".tabs");
const loader = document.getElementById("loader");
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
        (document.getElementById("dashboard_icon").style.color = "#ea7e54")
      : "";
  });
  t.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.style.backgroundColor = "transparent";
      t.style.color = "#fff";
      t.style.display = "flex";
      t.style.alignItems = "center";
      t.style.justifyContent = "start";
      // t.style.width = "100%";
    });
    show.forEach((s) => {
      s.style.display = "none";
    });
    t.style.color = "black";
    t.style.backgroundColor = "lightgray";
    t.style.borderRadius = "5px";
    t.style.display = "flex";
    t.style.alignItems = "center";
    t.style.justifyContent = "center";
    // t.style.backgroundColor = "#ea7e54";
    show[i].style.display = "block";
    // console.log(t);
  });
});
// const myFun = tabs.forEach((t, i) => {
// //   show.forEach((s) => {
// //     s.id === "dashboard"
// //       ? (document.getElementById("dashboard").style.display = "block") &&
// //         (document.getElementById("dashboard_icon").style.color = "#ea7e54")
// //       : "";
// //   });
// //   t.addEventListener("click", () => {
// //     tabs.forEach((t) => {
// //       t.style.backgroundColor = "transparent";
// //       t.style.color = "#fff";
// //       // t.style.width = "100%";
// //     });
// //     show.forEach((s) => {
// //       s.style.display = "none";
// //     });
// //     t.style.color = "#ea7e54";
// //     // t.style.backgroundColor = "#ea7e54";
// //     show[i].style.display = "block";
// //     // console.log(t);
// //   });
// // });
// // default display
// console.log("aneshh");
