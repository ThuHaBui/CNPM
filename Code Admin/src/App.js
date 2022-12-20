import { useContext } from "react";
import { BrowserRouter ,Navigate,Route,Routes} from "react-router-dom";
import { AuthContext } from "./components/context/AuthContext";
import { productInputs, userInputs } from "./formSource";
import Home from "./pages/home/Home"
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";



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
          <Route index element = {<RequireAuth><List/></RequireAuth>}/>
          <Route path=":customerid" element ={<RequireAuth><Single/></RequireAuth>}/>
          <Route path="new" element ={<RequireAuth><New inputs= {userInputs} title="Thêm hồ sơ khách hàng"/></RequireAuth>}/>
        </Route>
        <Route path = "reservations">
          <Route index element = {<RequireAuth><List/></RequireAuth>}/>
          <Route path=":reservationid" element ={<RequireAuth><Single/></RequireAuth>}/>
          <Route path="new" element ={<RequireAuth><New inputs={productInputs} title="Thêm đơn đặt phòng"/></RequireAuth>}/>
        </Route>

      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App;
