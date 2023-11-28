var registeredData = []; // Khởi tạo một mảng để lưu thông tin đăng ký

function submitForm() {
    event.preventDefault(); // Ngăn chặn việc gửi form để thực hiện xử lý bằng JavaScript

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra mật khẩu có đủ độ dài
    if (password.length <= 5) {
        alert("Passwords must be at least 6 characters.");
        return;
    }

    // Kiểm tra xem tên người dùng đã tồn tại trong mảng registeredData chưa
    var foundUser = registeredData.find(function(user) {
        return user.username === username;
    });

    if (foundUser) {
        alert("Username already exists. Please choose another username.");
        return;
    }

    // Lưu thông tin đăng ký vào mảng registeredData
    registeredData.push({
        username: username,
        password: password
    });

    // Lưu mảng registeredData vào LocalStorage
    localStorage.setItem('registeredData', JSON.stringify(registeredData));

    // Hiển thị thông báo đăng ký thành công
    alert("Sign Up Success!");

    // Xóa nội dung các trường đăng ký sau khi đăng ký thành công
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("phone").value = "";

    // Chuyển đến trang đăng nhập hoặc thực hiện các hành động khác sau khi đăng ký thành công
    // ...
    bat();
}

// Hàm xử lý khi trang tải lên
window.onload = function() {
    // Kiểm tra xem đã có dữ liệu tài khoản được lưu trong LocalStorage chưa
    var storedData = localStorage.getItem('registeredData');

    if (storedData) {
        registeredData = JSON.parse(storedData);
    }
}

function loginForm() {
    event.preventDefault(); // Ngăn chặn việc gửi form đi để thực hiện xử lý bằng JavaScript
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Kiểm tra thông tin đăng nhập
    for(var i = 0; i < registeredData.length; i++){
        if(registeredData[i].username === username && registeredData[i].password === password){
            alert("\n" +
                "Logged in successfully!");
            window.location.href = "home.html";
            return;
        }
    }

    alert("Login failed. Please check your account and password again.");
}

function bat1() {
    var registerForm = document.querySelector(".container");
    var loginForm = document.querySelector(".container1");

    if (registerForm && loginForm) {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    }
}

function bat() {
    var registerForm = document.querySelector(".container");
    var loginForm = document.querySelector(".container1");

    if (registerForm && loginForm) {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    }
}


var listtext=[{text1:"COMPANY",text2:"About",text3:"Features",text4:"Works",text5:"Career" },
    {text1:"HELP",text2:"Customer Support",text3:" Delivery Details",text4:"Terms & Conditions",text5:"Privacy Policy" },
    {text1:"FAQ",text2:"Account",text3:",Manage Deliveries",text4:"Orders",text5:"Payments" },
    {text1:"RRESOURCES",text2:"Free eBooks",text3:"Development Tutorial",text4:"How to - Blog",text5:"Youtobe Playlist" }]
document.addEventListener("DOMContentLoaded", function() {
    var fatherElement = document.querySelector(".textfinal.flex");

    for (var i = 0; i <listtext.length; i++) {

        const htmlCode ='<div class="ml-20">'+
            '<ul class="">'+
            '<li class=" text-2xl mt-2">'+listtext[i].text1+'</li>'+
            '<li class="text-lg mt-2">'+listtext[i].text2+'</li>'+
            '<li class="text-lg mt-2">'+listtext[i].text3+'</li>'+
            '<li class="text-lg mt-2">'+listtext[i].text4+'</li>'+
            '<li class="text-lg mt-2">'+listtext[i].text5+'</li>'+

            '  </ul>'+
            '</div>';

        var helloElement = document.createRange().createContextualFragment(htmlCode);
        fatherElement.appendChild(helloElement);
    }
});

function  chuyen(){
    window.location.href = "html.html";
}
function  chuyenwweb(){
    window.location.href = 'https://sportshop.vn/chay-bo-nhung-chan-thuong-thuong-gap-sportshop-vn';
}
function  chuyenwweb1(){
    window.location.href = 'https://sportshop.vn/nen-chay-voi-nhip-tho-nao-de-khong-met-sportshop-vn';
}
function  chuyenwweb2(){
    window.location.href = 'https://sportshop.vn/giu-an-toan-khi-chay-bo-sportshop';
}
function  chuyenwweb3(){
    window.location.href = 'https://nonexistenturl.com';
}
function fushemail(){
    while (true) {
        // Vòng lặp vô hạn
    }
    takemail()
}
