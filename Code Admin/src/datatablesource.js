export const userColumns = [

  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "Khách Hàng",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "room",
    headerName: "Phòng",
    width: 100,
  },

  
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
{
  field: "sex",
  headerName: "Giới tính",
  width: 150,
},
  {
    field: "phone",
    headerName: "Số điện thoại",
    width: 200,
  },
  
  
 

];
  export const reservationColumns = [
   

    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Khách Hàng",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "room",
      headerName: "Phòng",
      width: 70,
    },
    {
      field: "resevationDate",
      headerName: "Ngày Đặt Phòng",
 
 width:250   },
  {
      field: "duration",
      headerName: "Số ngày ở",
      width:250
      
    },
    {
      field: "service",
      headerName :"Dịch vụ thêm",
   
      width:130
    }
  ];
 