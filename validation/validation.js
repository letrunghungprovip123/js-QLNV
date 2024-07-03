function countNonSpaceChars(str) {
    // Loại bỏ tất cả các khoảng trắng
    var stringWithoutSpaces = str.replace(/ /g, '');
    // Độ dài của chuỗi đã loại bỏ khoảng trắng
    return stringWithoutSpaces.length;
}


function checkEmptyValue(value,span){
    if(value){
        span.classList.remove("d-block")
        span.innerHTML = ""
        return true
    }else{
        span.classList.add("d-block")
        span.innerHTML = "Không được bỏ trống trường dữ liệu này"
        return false
    }
}


function checkTKNhanVien(value,span){
    if(countNonSpaceChars(value) >= 4 && countNonSpaceChars(value) <= 6){
        span.classList.remove("d-block")
        span.innerHTML = ""
        return true
    }else{
        span.classList.add("d-block")
        span.innerHTML = "Nhập tài khoản từ 4 đến 6 kí tự"
        return false
    }
}
function checkTenNhanVien(value,span){
    if(/^[a-zA-Z\s]+$/.test(value)){
        span.classList.remove("d-block")
        span.innerHTML = ""
        return true
    }else {
        span.classList.add("d-block")
        span.innerHTML = "Nhập tên phải là chữ"
        return false
    }
}
function checkEmailNhanVien(value,span){
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
        span.classList.remove("d-block")
        span.innerHTML = ""
        return true
    }else{
        span.classList.add("d-block")
        span.innerHTML = "Định dạng Email không hợp lệ"
        return false
    }
}

function checkMatKhauNhanVien(value,span){
    if(value.length <= 6 || value.length >=10){
        span.classList.add("d-block")
        span.innerHTML = "Nhập từ 6 đến 10 kí tự"
        return false
    }
    if(!(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{1,}$/.test(value))){
        span.classList.add("d-block")
        span.innerHTML = "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
        return false
    }
    span.classList.remove("d-block")
    span.innerHTML = ""
    return true

}

function checkNgayLamNhanVien(value,span){
    if(!(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(value))){
        span.classList.add("d-block")
        span.innerHTML = "Định dạng ngày/tháng/năm không hợp lệ"
        return false
    }else{
        span.classList.remove("d-block")
        span.innerHTML = ""
        return true
    }
}

function checkLuongNhanVien(value,span){
    if(value * 1 > 1000000 && value * 1 < 20000000){
        span.classList.remove("d-block")
        span.innerHTML = ""
        return true
    }else{
        span.classList.add("d-block")
        span.innerHTML = "Nhập lương cơ bản từ 1000000 - 20000000"
        return false
    }
}
function checkChucVuNhanVien(value,span){
    if(value == "cc"){
        span.classList.add("d-block")
        span.innerHTML = "Vui lòng chọn chức vụ hợp lệ"
        return false
    }else{
        span.classList.remove("d-block")
        span.innerHTML = ""
        return true
    }
}
function checkSoGioLamNhanVien(value,span){
    if(value * 1 >= 80 && value * 1 <= 200){
        span.classList.remove("d-block")
        span.innerHTML = ""
        return true
    } else{
        span.classList.add("d-block")
        span.innerHTML = "Nhập số giờ làm trong tháng từ 80 - 200 giờ"
        return false
    }
}