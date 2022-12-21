import "./datatable.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesourceroom";
import { useState } from "react";

const DatatableRoomService = () => {
  const [data, setData] = useState(userRows);



  const actionColumn = [
    {
      field: "statis",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="ava">Available</div>
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="add">Thêm dịch vụ</div>
            <div className="delete">Xóa dịch vụ</div>
          </div>
        );
      },
    },
  ];
 
  return (
    <div className="datatable">
       <div className="datatableTitle">
        Quản lý dịch vụ phòng 
       
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon className='icon'/>
          <SortOutlinedIcon/>
        </div>
      
      </div>
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableRoomService;