
import { Keyboard, KeyboardArrowDown, MoreVertOutlined } from "@mui/icons-material"
import { CircularProgressbar } from "react-circular-progressbar"
import "./featured.scss"
import { KeyboardArrowUpOutlined, PersonOutlineOutlined } from '@mui/icons-material'
import "react-circular-progressbar/dist/styles.css"
const Featured = () => {
  return (
    <div className="feature">
      <div className="top">
      <h1 className="title">LỢI NHUẬN</h1>
      <MoreVertOutlined fontSize="small"/>
      </div>

      <div className="bottom">
        <div className="featurechart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Tổng lợi nhuận trong ngày</p>
        <p className="amount">$420</p>
        <p className="desc">
          Giao dịch trước đó đang được xử lý.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Năm</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small"/>
              <div className="resultAmount">12.4k</div>
            </div>
          </div>  
          <div className="item">
            <div className="itemTitle">Tuần</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small"/>
              <div className="resultAmount">34.3k</div>
            </div>
          </div>  
          <div className="item">
            <div className="itemTitle">Tháng</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small"/>
              <div className="resultAmount">52.4k</div>
            </div>
          </div>  
        </div>
      </div>
    </div>
    
  );
};

export default Featured;