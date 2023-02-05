//Chức năng ẩn thông tin cá nhân//
document.getElementById("hideInfor").style.display = "none";
function testMailFunction() {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let testEmail = document.getElementById("inputEmail").value;
    let text;
    if (regex.test(testEmail)) {
      document.getElementById("hideInfor").style.display = "block";
      document.getElementById("login").style.display = "none";
    } else {
      text = "Email không hợp lệ";
    }
    document.getElementById("alertText").innerHTML = text;
  }
//Nút nhấn view more/view less//
function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
          btnText.innerHTML = "View more"; 
          moreText.style.display = "none";
    } 
    else {
          dots.style.display = "none";
          btnText.innerHTML = "View less"; 
          moreText.style.display = "inline";
    }
}
///////////////////////////////
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");
  if (dots.style.display === "none") {
      dots.style.display = "inline";
        btnText.innerHTML = "View more"; 
        moreText.style.display = "none";
  } 
  else {
        dots.style.display = "none";
        btnText.innerHTML = "View less"; 
        moreText.style.display = "inline";
  }
}
///////////////////////////////
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");
  if (dots.style.display === "none") {
      dots.style.display = "inline";
        btnText.innerHTML = "View more"; 
        moreText.style.display = "none";
  } 
  else {
        dots.style.display = "none";
        btnText.innerHTML = "View less"; 
        moreText.style.display = "inline";
  }
}
///////////////////////////////
function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");
  if (dots.style.display === "none") {
      dots.style.display = "inline";
        btnText.innerHTML = "View more"; 
        moreText.style.display = "none";
  } 
  else {
        dots.style.display = "none";
        btnText.innerHTML = "View less"; 
        moreText.style.display = "inline";
  }
}
///////////////////////////////
function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");
  if (dots.style.display === "none") {
      dots.style.display = "inline";
        btnText.innerHTML = "View more"; 
        moreText.style.display = "none";
  } 
  else {
        dots.style.display = "none";
        btnText.innerHTML = "View less"; 
        moreText.style.display = "inline";
  }
}
///////////////////////////////
function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");
  if (dots.style.display === "none") {
      dots.style.display = "inline";
        btnText.innerHTML = "View more"; 
        moreText.style.display = "none";
  } 
  else {
        dots.style.display = "none";
        btnText.innerHTML = "View less"; 
        moreText.style.display = "inline";
  }
}
///////////////////////////////
// document.getElementById("experience-column").addEventListener("mouseover", Function1a);
// document.getElementById("experience-column").addEventListener("mouseout", Function1b);

// function Function1a() {
//   document.getElementById("myBtn1").style.display = "block";
// }
// function Function1b() {
//   document.getElementById("myBtn1").style.display = "none";
// }
// ///////////////////////////////
// document.getElementById("skill-column").addEventListener("mouseover", Function2a);
// document.getElementById("skill-column").addEventListener("mouseout", Function2b);

// function Function2a() {
//   document.getElementById("myBtn2").style.display = "block";
// }
// function Function2b() {
//   document.getElementById("myBtn2").style.display = "none";
// }
// ///////////////////////////////
// document.getElementById("language-column").addEventListener("mouseover", Function3a);
// document.getElementById("language-column").addEventListener("mouseout", Function3b);

// function Function3a() {
//   document.getElementById("myBtn3").style.display = "block";
// }
// function Function3b() {
//   document.getElementById("myBtn3").style.display = "none";
// }
// ///////////////////////////////
// document.getElementById("activity-column").addEventListener("mouseover", Function4a);
// document.getElementById("activity-column").addEventListener("mouseout", Function4b);

// function Function4a() {
//   document.getElementById("myBtn4").style.display = "block";
// }
// function Function4b() {
//   document.getElementById("myBtn4").style.display = "none";
// }
// ///////////////////////////////
// document.getElementById("study-column").addEventListener("mouseover", Function5a);
// document.getElementById("study-column").addEventListener("mouseout", Function5b);

// function Function5a() {
//   document.getElementById("myBtn5").style.display = "block";
// }
// function Function5b() {
//   document.getElementById("myBtn5").style.display = "none";
// }
// ///////////////////////////////
// document.getElementById("hobby-column").addEventListener("mouseover", Function6a);
// document.getElementById("hobby-column").addEventListener("mouseout", Function6b);

// function Function6a() {
//   document.getElementById("myBtn6").style.display = "block";
// }
// function Function6b() {
//   document.getElementById("myBtn6").style.display = "none";
// }