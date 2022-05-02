import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import {Routes,Route} from "react-router-dom"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./contexts/authContext";

function App() {
  const {isAuth} = useContext(AuthContext)
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        {isAuth ?(
           <Link className="nav-logout" to="/logout">
           Logout
         </Link>
        ):(
          <Link className="nav-login" to="/login">
          Login
        </Link>
        )}
       
       
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/login"element={<Login></Login>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
        <Route path="/orders" element=
        {<ProtectedRoute>
          <Orders></Orders>
        </ProtectedRoute>}>
        </Route>

        <Route path="/neworder" element=
        {<ProtectedRoute>
          <NewOrder></NewOrder>
        </ProtectedRoute>}>
          
        </Route>


      </Routes>
    </div>
  );
}

export default App;
