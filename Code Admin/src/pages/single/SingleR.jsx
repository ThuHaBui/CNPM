import "./singler.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"
const SingleR = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Thông tin</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
              alt="" 
              className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Jane Forster</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Jane@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số Điện Thoại:</span>
                  <span className="itemValue">0912345678</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa Chỉ:</span>
                  <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quốc Tịch:</span>
                  <span className="itemValue">USA</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="right">
            <h1 className="title">Thông tin phòng</h1>
            <div className="item">
              {/* <img 
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
              alt="" 
              className="itemImg" 
              /> */}
              <div className="details">
                <h1 className="itemTitle">501</h1>
                <div className="detailItem">
                  <span className="itemKey">Loại: </span>
                  <span className="itemValue">EXECUTIVE</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số Lượng Người: </span>
                  <span className="itemValue">2</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Dịch vụ thêm: </span>
                  <span className="itemValue">Không</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giá: </span>
                  <span className="itemValue">1.500.000</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default SingleR
