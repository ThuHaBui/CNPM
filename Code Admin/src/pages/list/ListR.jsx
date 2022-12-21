
import DatatableR from "../../components/datatable/DatatableRes"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"

const ListR = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableR columns = {columns}/>
      </div>

    </div>
  )
}

export default ListR
