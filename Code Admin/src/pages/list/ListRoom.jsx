
import DatatableRoom from "../../components/datatable/datatableroom"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"

const ListRoom = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableRoom columns = {columns}/>
      </div>

    </div>
  )
}

export default ListRoom
