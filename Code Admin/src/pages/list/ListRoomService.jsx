
import DatatableRoomService from "../../components/datatable/DatatableRoomService"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"

const ListRoomService = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableRoomService columns = {columns}/>
      </div>

    </div>
  )
}

export default ListRoomService
