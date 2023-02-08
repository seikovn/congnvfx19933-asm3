//Chức năng ẩn thông tin cá nhân//
document.getElementById("hideInfor").style.display = "none";
function testMailFunction() {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // đặt biến testEmail= giá trị nhập vào từ khung nhâjp email.
    let testEmail = document.getElementById("inputEmail").value;
    // biến text để gán chữ cảnh báo nếu nhập email không hợp lệ.
    let text;
    //hàm if nếu nhập email thoả mãn điều kiện của regex thì sez hiển thị khối có id là: hideInfor. đồng thời ẩn khối có id là: login.
    if (regex.test(testEmail)) {
      document.getElementById("hideInfor").style.display = "block";
      document.getElementById("login").style.display = "none";
      //nếu nhập email không hợp lệ thì xuất ra dòng chữ dưới.
    } else {
      text = "Email không hợp lệ";
    }
    //đưa nội dung biến text vào khối có id: alertText.
    document.getElementById("alertText").innerHTML = text;
  }
//6 Hàm cho 6 nút nhấn view more/view less//
//hàm myFunction1: cho mục "kinh nghiệm".
function myFunction1() {
  //tạo các biến dots, moreText,
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
    //nếu nội dung của biến dots là trạng thái không hiển thị thì hiện ra nút nhán có chữ "View more"
    if (dots.style.display === "none") {
        dots.style.display = "inline";
          btnText.innerHTML = "View more"; 
          moreText.style.display = "none";
    } 
    //ngoài điều kiện trên thì nút nhấn có chữ "View less"
    else {
          dots.style.display = "none";
          btnText.innerHTML = "View less"; 
          moreText.style.display = "inline";
    }
}
///////////////////////////////
//hàm myFunction2: cho mục "kỹ năng".
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
//hàm myFunction3: cho mục "ngôn ngữ".
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
//hàm myFunction4: cho mục "hoạt động".
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
//hàm myFunction5: cho mục "học vấn".
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
//hàm myFunction6: cho mục "sở thích".
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
//hàm lắng nghe sự kiện: chỉ khi di chuột tới: (function a), đi qua: (function b) khối nội dung thì sẽ hiện/ẩn nút nhấn. còn lại luôn ẩn.
//khối "kinh nghiệm".
document.getElementById("myBtn1").style.display = "none";
document.getElementById("experience-column").addEventListener("mouseover", Function1a);
document.getElementById("experience-column").addEventListener("mouseout", Function1b);

function Function1a() {
  document.getElementById("myBtn1").style.display = "block";
}
function Function1b() {
  document.getElementById("myBtn1").style.display = "none";
}
// ///////////////////////////////
//khối "kỹ năng".
document.getElementById("myBtn2").style.display = "none";
document.getElementById("skill-column").addEventListener("mouseover", Function2a);
document.getElementById("skill-column").addEventListener("mouseout", Function2b);

function Function2a() {
  document.getElementById("myBtn2").style.display = "block";
}
function Function2b() {
  document.getElementById("myBtn2").style.display = "none";
}
// ///////////////////////////////
//khối "ngôn ngữ".
document.getElementById("myBtn3").style.display = "none";
document.getElementById("language-column").addEventListener("mouseover", Function3a);
document.getElementById("language-column").addEventListener("mouseout", Function3b);

function Function3a() {
  document.getElementById("myBtn3").style.display = "block";
}
function Function3b() {
  document.getElementById("myBtn3").style.display = "none";
}
// ///////////////////////////////
//khối "hoạt động".
document.getElementById("myBtn4").style.display = "none";
document.getElementById("activity-column").addEventListener("mouseover", Function4a);
document.getElementById("activity-column").addEventListener("mouseout", Function4b);

function Function4a() {
  document.getElementById("myBtn4").style.display = "block";
}
function Function4b() {
  document.getElementById("myBtn4").style.display = "none";
}
// ///////////////////////////////
//khối "học vấn".
document.getElementById("myBtn5").style.display = "none";
document.getElementById("study-column").addEventListener("mouseover", Function5a);
document.getElementById("study-column").addEventListener("mouseout", Function5b);

function Function5a() {
  document.getElementById("myBtn5").style.display = "block";
}
function Function5b() {
  document.getElementById("myBtn5").style.display = "none";
}
// ///////////////////////////////
//khối "sở thích".
document.getElementById("myBtn6").style.display = "none";
document.getElementById("hobby-column").addEventListener("mouseover", Function6a);
document.getElementById("hobby-column").addEventListener("mouseout", Function6b);

function Function6a() {
  document.getElementById("myBtn6").style.display = "block";
}
function Function6b() {
  document.getElementById("myBtn6").style.display = "none";
}
