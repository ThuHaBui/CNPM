import { useContext } from "react";
import { BrowserRouter ,Navigate,Route,Routes} from "react-router-dom";
import { AuthContext } from "./components/context/AuthContext";
import { reservationColumns, userColumns } from "./datatablesource";
import { reservationInputs, userInputs } from "./formSource";
import Home from "./pages/home/Home"
import List from "./pages/list/List";
import ListR from "./pages/list/ListR";
import ListRoomService from "./pages/list/ListRoomService";
import ListRoom from "./pages/list/ListRoom";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import SingleR from "./pages/single/SingleR";



function App() {
  
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  console.log(currentUser)
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route path ="/">
        <Route path="login" element ={
        <Login/>
        }/>
          <Route index element = {
              <RequireAuth>
              <Home/>
              </RequireAuth>
          }/>
         
          </Route>
          <Route path = "customers">
          <Route index element = {<RequireAuth><List columns={userColumns}/></RequireAuth>}/>
          <Route path=":customerid" element ={<RequireAuth><Single/></RequireAuth>}/>
          
        </Route>
        <Route path = "reservations">
          <Route index element = {<RequireAuth><ListR columns={reservationColumns}/></RequireAuth>}/>
          <Route path=":reservationid" element ={<RequireAuth><SingleR/></RequireAuth>}/>
          <Route path="new" element ={<RequireAuth><New inputs= {userInputs} title="Thêm hồ sơ khách hàng"/></RequireAuth>}/>
        </Route>
        <Route path = "rooms">
          <Route index element = {<RequireAuth><ListRoom columns={reservationColumns}/></RequireAuth>}/>
        </Route>
        <Route path = "roomservices">
          <Route index element = {<RequireAuth><ListRoomService columns={reservationColumns}/></RequireAuth>}/>
        </Route>

      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App;
