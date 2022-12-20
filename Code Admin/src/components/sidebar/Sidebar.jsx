import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className = "sidebar">
        <div className = "top">
            
            <Link to="/" style={{textDecoration:"none"}} >
            <span className = "logo">GOLDEN CENTURY</span>
            </Link>
        </div>
        <hr/>
        <div className = "center">
            <ul>
                <p className = "title">SERVICE</p>
                <Link to="/" style={{textDecoration:"none"}} >
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <Link to="/reservations" style={{textDecoration:"none"}} >
                <li>
                    <BedOutlinedIcon className="icon"/>
                    <span>Quản lý đặt phòng</span>
                </li>
                </Link>
                <Link to="/customers" style={{textDecoration:"none"}} >
                <li>
                    <ManageAccountsIcon className="icon"/>
                    <span>Quản lý thông tin khách hàng</span>
                </li>
                </Link>
                <li>
                    <RoomServiceIcon className="icon"/>
                    <span>Quản lý dịch vụ phòng</span>
                </li>
                <p className = "title">USEFUL</p>
                <li>
                    <AssessmentOutlinedIcon className="icon"/>
                    <span>Báo cáo</span>
                </li>
                <li>
                   <LoyaltyOutlinedIcon className="icon"/>
                    <span>Khuyến mãi</span>
                </li>
                <p className = "title">SYSTEM</p>
                <Link to="/login" style={{textDecoration:"none"}} >
                <li>
                   <ExitToAppOutlinedIcon className="icon"/>
                    <span>LogOut</span>
                </li>
                </Link>
            </ul>
        </div>
      
    </div>
  )
}

export default Sidebar
