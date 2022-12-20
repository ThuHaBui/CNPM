import { useContext, useState } from "react"
import {  signInWithEmailAndPassword } from "firebase/auth";
import "./login.scss"
import {auth} from "../../firebase"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/AuthContext";
const Login = () => {
  
  const [error,setError] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const{dispatch}= useContext(AuthContext)
  const handleLogin=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    navigate("/")
  })
  .catch((error) => {
    setError(true)
  });

  }
  return (

    <div className="login">
          <div className="title">GOLDEN HOTEL ADMIN PAGE</div>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}></input>
        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}></input>
        <button type="submit">Đăng nhập</button>
       { error && <span>Sai Email hoặc mật khẩu!!!</span>}
      </form>
    </div>
  )
}

export default Login
