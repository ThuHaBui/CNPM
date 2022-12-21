import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, PersonOutlineOutlined } from '@mui/icons-material'
import './widget.scss'
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
const Widget = ({type}) => {
  const amount = 100;
  const diff = 20;
  let data;
  switch(type){
      case"customers":
          data={
            title:"KHÁCH HÀNG",
            isMoney: false,
            link:"Xem thông tin khách hàng",
            icon:(
              <PersonOutlineOutlined className='icon' style={{
                color :'crimson',
                backgroundColor:"rgba(255,0,0,0.2)"
              }}/>
            )
          };
          break;
    case"reservations":
          data={
            title:"ĐẶT CHỖ",
            isMoney: false,
            link:"Xem thông tin đặt chỗ",
            query:"reservations",
            icon:(
              <BedOutlinedIcon className="icon" style={{
                color :'goldenrod',
                backgroundColor:"rgba(218,165,32,0.2)"
              }}/>
            )
          };
          break;
    case"earning":
          data={
            title:"THU NHẬP",
            isMoney: true,
            link:"Xem chi tiết",
            icon:(
              <LocalAtmOutlinedIcon className='icon'style={{
                color :'green',
                backgroundColor:"rgba(128,0,0,0.2)"
              }}/>
            )
          };
            break;
            case"room":
            data={
              title:"PHÒNG",
              isMoney: false,
              link:"Xem phòng trống",
              icon:(
                <CheckroomIcon className='icon' style={{
                  color :'perple',
                  backgroundColor:"rgba(128,0,128,0.2)"
                }}/>
              )
            };
              break;
    default:
    break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownOutlined/> : <KeyboardArrowUpOutlined/> }
          {diff} %  
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;