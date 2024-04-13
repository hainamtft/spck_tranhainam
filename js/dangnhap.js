var login = document.getElementById("button");
login.addEventListener("click",getvalue);
function getvalue(){
    let name = document.getElementById("name").value;
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;
    var user = localStorage.getItem(name);
    var data = JSON.parse(user);
    if(user == null){
        alert("vui lòng nhập name và password");
    }
    else if(
        name == data.name && gmail == data.gmail && password == data.password 
    ){
        alert("đăng nhập thành công")
        location.href="../html/index.html";
    }
    else {
        alert("đăng nhập thất bại")
    }
}