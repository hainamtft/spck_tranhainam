var login = document.getElementById("button");
login.addEventListener("click",getvalue);
function getvalue(){
    let name = document.getElementById("name").value;
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;
    let sdt = document.getElementById("sdt").value;
    var dangky = {
                name: name,
                gmail: gmail,
                sdt: sdt,
                password: password,
            };
            var json = JSON.stringify(dangky);
                localStorage.setItem(name, json);  
    if ( name === "" && gmail === "" && password === "" && sdt === ""){
        alert("vui lòng điền thông tin")
    }
    else if (name === ""){
        alert("vui lòng điền tên")
    }
    else if(gmail === ""){
        alert("vui lòng điền gmail")
    }
    else if(password === ""){
        alert("vui lòng điền password")
    }
    else if (sdt === ""){
        alert("vui lòng điền sdt")
    }
    else {
        alert("tạo tài khoản thành công");
        location.href ="../html/dangnhap.html";
    }
}
Q