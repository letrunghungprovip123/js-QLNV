arr = getLocalStorageNV();
let a = true
renderArrNhanVien(arr)

formQLNV = document.getElementById("formQLNV")

function getValueNhanVien(){
    arrField = document.querySelectorAll("#formQLNV input,#formQLNV select")
    let nhanVien = new NhanVien()
    let isValid = true
    for (field of arrField) {
        let { value, id } = field
        nhanVien[id] = value
        theSpanThongBao = field.parentElement.parentElement.querySelector('.form-group > span')
        isEmpty = checkEmptyValue(value,theSpanThongBao);
        isValid &= isEmpty
        if(!isEmpty){
            continue;
        }
        if(id == "tknv"){
            isValid &= checkTKNhanVien(value,theSpanThongBao)
        }
        if(id == "name"){
            isValid &= checkTenNhanVien(value,theSpanThongBao)
        }
        if(id == "email"){
            isValid &= checkEmailNhanVien(value,theSpanThongBao)
        }
        if(id == "password"){
            isValid &= checkMatKhauNhanVien(value,theSpanThongBao)
        }
        if(id == "datepicker"){
            isValid &= checkNgayLamNhanVien(value,theSpanThongBao)
        }
        if(id == "luongCB"){
            isValid &= checkLuongNhanVien(value,theSpanThongBao)
        }
        if(id == "chucvu"){
            isValid &= checkChucVuNhanVien(value,theSpanThongBao)
        }
        if(id == "gioLam"){
            isValid &= checkSoGioLamNhanVien(value,theSpanThongBao)
        }
    }
    if(!isValid) return;

    return nhanVien
}
formQLNV.onsubmit = (event) => {
    event.preventDefault();
    let nhanVien = getValueNhanVien();
    if(!nhanVien){
        return;
    }
    arr.push(nhanVien)
    saveLocalStorageNV("arrNhanVien", arr)
    renderArrNhanVien(arr);
    formQLNV.reset()
}
function renderArrNhanVien(arr) {
    content = ``
    for (i of arr) {
        let newNhanVien = new NhanVien()
        Object.assign(newNhanVien, i)
        content += `
        <tr>
            <td>${newNhanVien.tknv}</td>
            <td>${newNhanVien.name}</td>
            <td>${newNhanVien.email}</td>
            <td>${newNhanVien.datepicker}</td>
            <td>${newNhanVien.chucvu}</td>
            <td>${newNhanVien.tinhTongLuong()}</td>
            <td>${newNhanVien.xepLoaiNhanVien()}</td>
            <td>
                <button class="btn btn-danger" onclick= "deleteNhanVien('${newNhanVien.tknv}')">Xóa</button>
                <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" onclick= "getInforNhanVien('${newNhanVien.tknv}')">Sửa</button>
            </td>
        </tr>
        `
    }
    document.getElementById("tableDanhSach").innerHTML = content
}

function saveLocalStorageNV(key = "arrNhanVien", value) {
    stringJSON = JSON.stringify(value)
    localStorage.setItem(key, stringJSON)
}

function getLocalStorageNV(key) {
    arrData = localStorage.getItem(key = "arrNhanVien")
    newArrData = JSON.parse(arrData)
    return newArrData ? newArrData : []
}

function deleteNhanVien(tknv) {
    for (i in arr) {
        if (arr[i].tknv == tknv) arr.splice(i, 1)
    }
    saveLocalStorageNV("arrNhanVien", arr)
    renderArrNhanVien(arr);
}


function getInforNhanVien(tknv) {
    a = false
    document.getElementById("btnThemNV").disabled = true
    arrField = document.querySelectorAll("#formQLNV input,#formQLNV select")
    for (i of arr) {
        if (i.tknv == tknv) {
            for (field of arrField) {
                let { id } = field
                field.value = i[id]
            }
        }
    }
    document.getElementById("tknv").readOnly = true
    return arrField
}


document.getElementById("btnCapNhat").onclick = () => {
    let nhanVien = getValueNhanVien();
    for (i in arr) {
        if (arr[i].tknv == nhanVien.tknv) arr[i] = nhanVien
    }
    saveLocalStorageNV("arrNhanVien", arr)
    renderArrNhanVien(arr);

}
document.getElementById("btnThem").onclick = () => {
    if(a == false){
        formQLNV.reset()
        a = true
    }
    document.getElementById("btnThemNV").disabled = false
    document.getElementById("tknv").readOnly = false
}


document.getElementById("searchName").oninput = (event) => {
    let originWord = removeVietnameseTones(event.target.value).trim().toLowerCase()
    let arrFilter = arr.filter((item,index) => {
        let newNhanVien = new NhanVien();
        Object.assign(newNhanVien,item)
        let originWord2 = removeVietnameseTones(newNhanVien.xepLoaiNhanVien()).trim().toLowerCase()
        return originWord2.includes(originWord)
    })
    renderArrNhanVien(arrFilter)
}
