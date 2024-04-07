 loginvar = document.getElementById("button");
login.addEventListener("click",getvalue);
function getvalue(){
    let name = document.getElementById("name").value;
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;
    if ( name === "" && gmail === "" && password === ""){
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
    else {
        alert("đăng nhập thành công");
        location.href ="./html/index.html";
    }
}