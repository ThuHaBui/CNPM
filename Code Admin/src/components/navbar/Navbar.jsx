import { LanguageOutlined, MonochromePhotos } from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./navbar.scss"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneIcon className='icon'/>
            <div className='counter'></div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon'/>
            <div className='counter'></div>
          </div>
          <div className="item">
            <img
            src="https://media-cdn-v2.laodong.vn/storage/newsportal/2022/11/23/1119754/Blackpink-1A.jpg"
            alt=""
            className='avatar'
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
