let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat6 = document.getElementById("boat6");
let mountains7 = document.getElementById("mountains7");
let nouvil = document.querySelector(".nouvil");

window.onscroll = function () {
  let value = window.scrollY; // تأكد من استخدام scrollY بدلاً من scrolly
  console.log(value); // طباعة القيمة للتحقق

  // تعديل الأنماط بناءً على التمرير
  if (stars) stars.style.left = value + "px";
  if (moon) moon.style.top = value * 3 + "px";
  if (mountains3) mountains3.style.top = value * 2 + "px";
  if (mountains4) mountains4.style.top = value * 1.5 + "px";
  if (river) river.style.top = value + "px";
  if (boat6) boat6.style.top = value + "px";
  if (boat6) boat6.style.left = value * 3 + "px";
  if (nouvil) nouvil.style.fontSize = value + "px";

  // التحقق من تغيير بعض الأنماط عندما يصل التمرير إلى قيم معينة
  let mainElement = document.querySelector(".main");
  if (mainElement) {
    if (value > 127) {
      console.log("Background changed to: linear-gradient(#376281, #10001f)");
      mainElement.style.background = "linear-gradient(#376281, #10001f)";
    } else {
      console.log("Background changed to: linear-gradient(#200016, #10001f)");
      mainElement.style.background = "linear-gradient(#200016, #10001f)";
    }
  } else {
    console.log("Element '.main' not found.");
  }

  if (value >= 67) {
    if (nouvil) {
      nouvil.style.fontSize = 67 + "px";
      nouvil.style.position = "fixed";
    }
    if (value >= 438) {
      if (nouvil) nouvil.style.display = "none";
    } else {
      if (nouvil) nouvil.style.display = "block";
    }
  }
};
