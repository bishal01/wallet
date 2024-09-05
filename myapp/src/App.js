import About from "./user/About";
import Navbar from "./user/Navbar";
import Userdash from "./user/Userdash";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black" >
      <Navbar/>
    <Outlet/>
     
    </div>
  );
}

export default App;
