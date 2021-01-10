function getEle (id ){
   return document.getElementById(id);
}

getEle("btnLuu").addEventListener("click", function(){
     var tenNV = getEle("txtName").value;
     var viTri = getEle("viTriLamViec").value;
     var luong = getEle("txtLuong").value;
     var gioiTinhNam =getEle('gioiTinhNam');
     var gioiTinhNu =getEle('gioiTinhNu');

     var luong = parseFloat(luong);
    // var gioiTinh = document.getElementsByName(this, 'sex')
    // console.log(gioiTinh);


    //  khởi tạo đối tượng nhân viên
    var nhanVien = new NhanVien(tenNV ,viTri,luong);

    // validate form
    if(tenNV =="" || viTri=="" ){
        alert("vui lòng nhập đầy đủ thông tin");

    }
    else if(tenNV.length < 8){
        alert("Tên không được dưới 8 ký tự");
    }
    else if(luong < 0 ||  isNaN(luong)){
        alert("Lương không được để trống và không là số âm");

    }
    else if(gioiTinhNam.checked == false && gioiTinhNu.checked == false){
        alert("Vui lòng chọn giới tính");
        getEle("luong").innerHTML = "";
    }
    else{
        getEle("hoten").innerHTML = nhanVien.tenNV;
        getEle("vtlv").innerHTML = nhanVien.vitri;
        getEle("luong").innerHTML = nhanVien.luong;
        if(gioiTinhNu.checked == true){
      
            getEle("gioitinh").innerHTML = gioiTinhNu.value;
        }
        else if(gioiTinhNam.checked == true){
            getEle("gioitinh").innerHTML = gioiTinhNam.value;
            
        }
    }
    
});