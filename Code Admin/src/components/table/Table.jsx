import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {
    const rows = [
        {
          id: 1143155,
          reserveDate:"1 March",
          sumPrice: 785,
          userID: 837424,
          roomID: 503,
          paymentStatus: "Approved",
          checkinStatus: "No",
        },
        {
            
          id: 2235235,
          userID:238423,
          reserveDate: "15 March",
          sumPrice: 900,
          roomID: 301,
          paymentStatus: "Pending",
          checkinStatus: "No",
        },
        {
            id: 9678346,
            userID: 314910,
            reserveDate: "15 March",
            sumPrice: 1500,
            roomID: 104,
            paymentStatus: "Approved",
            checkinStatus: "Yes",
        },
        {
            id: 8943153,
            userID:223423,
            reserveDate: "15 March",
            sumPrice: 900,
            roomID: 305,
            paymentStatus: "Approved",
            checkinStatus: "Yes",
        },
        {
            id: 2213435,
            userID:233413,
            reserveDate: "15 March",
            sumPrice: 9300,
            roomID: 402,
            paymentStatus: "Approved",
            checkinStatus: "No",
        },
      ];
  return  <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className='talbleCell'>ID</TableCell>
        <TableCell className='talbleCell'>ID Người dùng</TableCell>
        <TableCell className='talbleCell'>Ngày Đặt</TableCell>
        <TableCell className='talbleCell'>ID Phòng</TableCell>
        <TableCell className='talbleCell'>Tiền</TableCell>
        <TableCell className='talbleCell'>Trạng thái thanh toán</TableCell>
        <TableCell className='talbleCell'>Trạng thái nhận phòng</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
        >
          <TableCell>
            {row.id}
          </TableCell>
          <TableCell className='talbleCell' >{row.userID}</TableCell>
          <TableCell className='talbleCell' >{row.reserveDate}</TableCell>
          <TableCell className='talbleCell' >{row.roomID}</TableCell>
          <TableCell className='talbleCell' >{row.sumPrice}</TableCell>
          <TableCell className='talbleCell' ><span className={`status1 ${row.paymentStatus}`}>{row.paymentStatus}</span></TableCell>
          <TableCell className='talbleCell' ><span className={`status ${row.checkinStatus}`}>{row.checkinStatus}</span></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
}

export default List
