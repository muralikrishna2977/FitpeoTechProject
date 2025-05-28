import "./App.css";
import SideBar from "./components/SideBar/SideBar.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";

function App() {

  return (
    <div className="appContainer">
        <SideBar />
         <DashBoard />
        <Schedule />
    </div>
  )
  
}

export default App;
