class NhanVien{
    tknv = ""
    name = ""
    email = ""
    password = ""
    datepicker = ""
    luongCB = ""
    chucvu = ""
    gioLam = ""

    tinhTongLuong(){
        if (this.chucvu == "Sếp") return this.luongCB * 3
        if(this.chucvu == "Trưởng phòng") return this.luongCB * 2
        return this.luongCB * 1
    }

    xepLoaiNhanVien(){
        if(this.gioLam * 1 >= 192) return "Nhân Viên Xuất Sắc"
        if(this.gioLam * 1 >= 176) return "Nhân Viên Giỏi"
        if(this.gioLam * 1 >= 160) return "Nhân Viên Khá"
        return "Nhân Viên Trung Bình"
    }
}