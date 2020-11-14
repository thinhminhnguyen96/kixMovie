import createConnector from "../configs/connector"


class UserService{

  maNhom = 'GP01';
  url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung';
  //Get User
  
  getAllUserService = (soTrang,soPhanTuTrang) =>{
  return createConnector({
    method:"GET",
    url: `${this.url}//LayDanhSachNguoiDungPhanTrang?MaNhom=${this.maNhom}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrang}`

  });
  }

  //Edit User
  editUserService = (data)=>{
    return createConnector({
      method: "PUT",
      url: `${this.url}/CapNhatThongTinNguoiDung`,
      data: data,
    })
  }
 //Edit User
 addUserService = (data)=>{
  console.log(data);
  return createConnector({
    method: "POST",
    url: `${this.url}/ThemNguoiDung`,
    data: data,
  })
  }

  //Delete User
 deleteUserService = (id)=>{
   console.log(id);
  return createConnector({
    method: "DELETE",
    url: `${this.url}/XoaNguoiDung?TaiKhoan=${id}`,
    
  })
  }

  searchUserService = (taiKhoan,soTrang,soPhanTuTrang) =>{
    return createConnector({
      method: "GET",
      url: `${this.url}/TimKiemNguoiDungPhanTrang?MaNhom=${this.maNhom}&tuKhoa=${taiKhoan}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrang}`,
      
    })
  }

  detailUserService = (taiKhoan)=>{
    console.log(taiKhoan);
    return createConnector({
      method:"POST",
      url:`${this.url}/ThongTinTaiKhoan`,
      data:{taiKhoan:taiKhoan},
    })
  }

 
}







export default UserService;