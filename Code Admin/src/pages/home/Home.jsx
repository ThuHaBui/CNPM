import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widgets/Widget"
import Table from "../../components/table/Table"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="customers"/>
          <Widget type="reservations"/>
          <Widget type="room"/>
          <Widget type="earning"/>  
        </div>
        <div className="charts">
          <Featured/>
          <Chart title ="Lợi nhuận quý 3" aspect={((2/1))}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Đơn đặt phòng gần đây</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home
