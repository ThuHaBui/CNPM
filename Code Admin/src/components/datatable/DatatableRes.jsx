import "./datatable.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import { DataGrid } from "@mui/x-data-grid";
import { Link , useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
const DatatableR = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "customers"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();


    
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "customers", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
    const actionColumn = [
        {field:"action", headerName:"Action",width:350,renderCell:(params)=>
   { return(
        <div className='cellAction'>
            <Link to="/reservations/test" style={{textDecoration:"none"}} >
            <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
            <div className='checkButton'>Check In</div>
            <div className='checkButton' onClick={()=>handleDelete(params.row.id)}>Check Out</div>

        </div>
    );},},
    ];
  return (
    <div className='datatable'>
      
      <div className="datatableTitle">
        Thêm hồ sơ
       
        <Link to={`/${path}/new`} style={{textDecoration:"none"}} className="link" >
          THÊM
          </Link>
      
      </div>
      <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon className='icon'/>
          <SortOutlinedIcon/>
        </div>
       <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default DatatableR
