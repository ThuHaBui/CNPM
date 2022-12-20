import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
const Datatable = () => {
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
        {field:"action", headerName:"Action",width:200,renderCell:(params)=>
   { return(
        <div className='cellAction'>
            <Link to="/customers/test" style={{textDecoration:"none"}} >
            <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>

        </div>
    );},},
    ];
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Thêm hồ sơ
        <Link to="/customers/new" style={{textDecoration:"none"}} className="link" >
          THÊM
          </Link>
      </div>
       <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable